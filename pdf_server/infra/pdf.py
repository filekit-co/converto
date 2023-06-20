import asyncio
import io
import logging
from typing import List, Optional

import fitz

from exceptions import AlreadyEncryptException


def convert_bytes_to_pdf(stream: bytes, input_type: str):
    """
    You can access files with extensions like .xps, .oxps, .cbz, .fb2 or .epub

    ref: https://pymupdf.readthedocs.io/en/latest/document.html#Document.convert_to_pdf
    """
    # TODO: test 
    with fitz.Document(stream=stream, filetype=input_type) as doc:
        return doc.convert_to_pdf()


perm = int(
	fitz.PDF_PERM_ACCESSIBILITY # always use this
	| fitz.PDF_PERM_PRINT # permit printing
	| fitz.PDF_PERM_COPY # permit copying
	| fitz.PDF_PERM_ANNOTATE # permit annotations
)
encrypt_meth = fitz.PDF_ENCRYPT_AES_256 # strongest algorithm
def encrypt_pdf(file_bytes: bytes, ro_password: str, rw_password: Optional[str] = None):
    # The owner password provides full access rights, including changing passwords, encryption method, or permission detail.
    # The user password provides access to document content according to the established permission details. If present, opening the PDF in a viewer will require providing it.
    # !IMPORTANT: The user password cannot remove pdf password.

    out_bytes = io.BytesIO()
    with fitz.Document(stream=file_bytes, filetype='pdf') as doc:
        if doc.needs_pass:
            raise AlreadyEncryptException(f'This pdf is already encrypted.')

        doc.save(
            out_bytes,
            encryption=encrypt_meth, # set the encryption method
            user_pw=ro_password, # set the user password            
            owner_pw=rw_password, # set the owner password
            permissions=perm, # set permissions
        )
        return out_bytes.getvalue()



def decrypt_pdf(file_bytes: bytes, password:str):
    def is_incorrect_password_and_decrypt():
        # .authenticate() decrypt document
        try:
            return doc.authenticate(password) <= 0
        except Exception as e:
            logging.error(e)
            doc.close()
            return True
    
    out_bytes = io.BytesIO()
    with fitz.Document(stream=file_bytes, filetype='pdf') as doc:
        if not doc.needs_pass:
            return doc.tobytes()

        if is_incorrect_password_and_decrypt():
            raise InvalidPasswordException(f'Invalid password is given {password}')
        
        doc.save(out_bytes)
        return out_bytes.getvalue()


def add_a_watermark(pdf_bytes: bytes, watermark_bytes: bytes, overlay):
    out_bytes = io.BytesIO()
    img_xref = 0 # reuse image
    with fitz.Document(stream=pdf_bytes, filetype='pdf') as doc:
        for i in range(len(doc)):
            page = doc[i]
            # https://pymupdf.readthedocs.io/en/latest/page.html#Page.insert_image
            img_xref = page.insert_image(
                rect=page.bound(), 
                stream=watermark_bytes,
                overlay=overlay,
                xref=img_xref,
            )

        doc.save(out_bytes)
        return out_bytes.getvalue()



def add_a_logo(pdf_bytes: bytes, logo_bytes: bytes):
    out_bytes = io.BytesIO()
    img_xref = 0 # reuse image

    with fitz.Document(stream=pdf_bytes, filetype='pdf') as doc:
        for i in range(len(doc)):
            page = doc[i]
            img_xref = page.insert_image(
                fitz.Rect(0,0,50,50),
                stream=logo_bytes,
                xref=img_xref, 
                overlay=True
            )
        doc.save(out_bytes)
        return out_bytes.getvalue()


async def adocument(stream: bytes, filetype:str):
    return fitz.Document(stream=stream, filetype=filetype)


async def merge_pdfs(files: List[bytes]):
    out_bytes = io.BytesIO()
    docs = await asyncio.gather(
        *(adocument(fb, 'pdf') for fb in files)
    )

    try:
        if len(docs) == 1:
            docs[0].save(out_bytes)
            return out_bytes.getvalue()

        start_doc = docs[0]
        for d in docs[1:]:
            start_doc.insert_pdf(d)
        start_doc.save(out_bytes)
        return out_bytes.getvalue()
    
    finally:
        for doc in docs:
            if not getattr(doc, "is_closed", True):
                doc.close()


async def split_pdf(doc: fitz.Document, start: int, end: int):
    out_bytes = io.BytesIO()
    with fitz.Document() as splitted_pdf:
        splitted_pdf.insert_pdf(doc, from_page=start, to_page=end)
        splitted_pdf.save(out_bytes)
        return out_bytes.getvalue()


interface Page {
  key: string;
  value: Array<{ href: string; text: string }>;
}

export const DEFAULT_FILE_NAME: string = 'file'
export const COUNTRIES: { [key: string]: string } = {
  us: 'English',
  kr: 'Korean',
  in: 'Indian',
  ch: 'Chinese',
  vn: 'Vietnamese',
  jp: 'Japanese',
};

export const COUNTRY_CODES = Object.keys(COUNTRIES)


export let pages: Page[] = [
  {
    key: "Format",
    value: [
      { href: '/pdf-to-doc', text: 'PDF to DOC' },
      { href: '/pdf-to-docx', text: 'PDF to DOCX' },
      { href: '/pdf-to-word', text: 'PDF to WORD' },
      { href: '/xps-to-doc', text: 'XPS to DOC' },
      { href: '/xps-to-docx', text: 'XPS to DOCX' },
      { href: '/xps-to-pdf', text: 'XPS to PDF' },
      { href: '/cbz-to-pdf', text: 'CBZ to PDF' },
      { href: '/epub-to-doc', text: 'EPUB to DOC' },
      { href: '/epub-to-docx', text: 'EPUB to DOCX' },
      { href: '/epub-to-pdf', text: 'EPUB to PDF' },
      { href: '/fb2-to-pdf', text: 'FB2 to PDF' },
      { href: '/oxps-to-pdf', text: 'OXPS to PDF' },
    ]
  },
  {
    key: "PDF",
    value: [
      { href: '/compress-pdf', text: 'Compress pdf' },
      { href: '/protect-pdf', text: 'Protect pdf' },
      { href: '/unlock-pdf', text: 'Unlock pdf' },
    ],
  },
  {
    key: "Image",
    value: [
      { href: '/remove-background', text: 'Remove Background' },
    ],
  }
]
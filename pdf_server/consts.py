import mimetypes
from functools import lru_cache

mimetypes.init()

@lru_cache
def get_mimetype(ext: str):
    """etx example .doc .docx"""
    return mimetypes.types_map.get(ext)
from typing import Any, Dict, Optional

from fastapi import HTTPException, status


class NotEnoughFiles(HTTPException):
    def __init__(
            self,
            headers: Optional[Dict[str, Any]] = None
        ):
        super().__init__(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Should give more than two pdf files",
            headers=headers
        )



class ConversionException(Exception): 
    pass

class MakedocxException(ConversionException): 
    pass

class InvalidPasswordException(ConversionException):
    pass


class AlreadyEncryptException(ConversionException):
    pass


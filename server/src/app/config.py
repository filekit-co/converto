import logging
from functools import lru_cache

from pydantic import BaseSettings


class Cfg(BaseSettings):
    phase: str
    base_url: str

    def log_level(self):
        if self.phase in ('PROD', 'DEV'):
            return logging.INFO
        return logging.DEBUG

    class Config:
        env_file = ".env"

@lru_cache()
def get_config():
    return Cfg()

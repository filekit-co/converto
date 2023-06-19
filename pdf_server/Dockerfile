# https://fastapi.tiangolo.com/deployment/docker/#docker-image-with-poetry
FROM python:3.10-slim as requirements-stage

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /tmp

RUN apt-get update && \
  pip install --upgrade pip && \
  pip install poetry==1.4 && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY ./poetry.lock* ./pyproject.toml /tmp/

RUN poetry export -f requirements.txt --output requirements.txt --without-hashes

FROM python:3.10-slim as build-stage

WORKDIR /src

# cv2 libgl1-mesa-glx:  ImportError: libGL.so.1: cannot open shared object file: No such file or directory
# libgthread-2.0.so.0: cannot open shared object file
RUN apt-get update && \
  apt-get install -y --no-install-recommends build-essential libgl1-mesa-glx libglib2.0-0 && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
COPY --from=requirements-stage /tmp/requirements.txt /src/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /src/requirements.txt


EXPOSE 80
EXPOSE 443

COPY . /src/

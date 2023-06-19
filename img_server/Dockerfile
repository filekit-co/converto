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

# https://unstructured-io.github.io/unstructured/installing.html
RUN apt-get update && \
  apt-get install -y --no-install-recommends build-essential && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY --from=requirements-stage /tmp/requirements.txt /src/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /src/requirements.txt
RUN python -c 'from rembg.sessions.u2net import U2netSession; U2netSession.download_models()'


EXPOSE 80
EXPOSE 443

COPY ./src /src/

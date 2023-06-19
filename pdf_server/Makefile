.PHONY: dev build up down destroy info

dev:
	poetry run uvicorn main:app --reload

build:
	docker compose build

up:
	docker compose up --build -d --remove-orphans

down:
	docker compose down

destroy:
	docker compose down -v

info:
	docker compose logs -f

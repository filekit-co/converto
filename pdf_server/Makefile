.PHONY: dev run up down destroy info

init:
	poetry env use 3.10
	poetry install

dev:
	poetry run uvicorn main:app --reload

run:
	make up
	make info

up:
	docker compose up --build -d --remove-orphans

down:
	docker compose down

destroy:
	docker compose down -v

info:
	docker compose logs -f

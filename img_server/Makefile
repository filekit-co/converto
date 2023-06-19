.PHONY: dev build up down destroy shell deploy info p-info

dev:
	poetry run uvicorn main:app --reload

build:
	docker compose build

up:
	docker compose up --build

down:
	docker compose down

destroy:
	docker compose down -v

deploy:
	git pull
	docker compose --file docker-compose.prod.yml down
	docker compose --file docker-compose.prod.yml up --build -d --remove-orphans

shell:
	docker exec -it converto sh

info:
	docker compose logs -f

p-info:
	docker compose --file docker-compose.prod.yml logs -f

all:
	git pull
	docker-compose down
	docker volume rm map-admin_src
	docker-compose up --build
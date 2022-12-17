all:
	docker-compose down
	docker volume rm map-admin_src
	docker-compose up -d --build

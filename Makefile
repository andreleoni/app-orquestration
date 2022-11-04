start:
	docker-compose up -d
	gnome-terminal --tab -- bash -ic "make server-backend"
	gnome-terminal --tab -- bash -ic "make server-frontend"

bash-backend:
	docker exec -it app-backend /bin/bash

server-backend:
	docker exec -it app-backend rails s -b 0.0.0.0 -p 3001

server-frontend:
	docker exec -it app-frontend npm start

setup:
	docker-compose up --build
	docker exec -it app-backend rails db:create
	docker exec -it app-backend rails db:migrate

stop:
	docker-compose down

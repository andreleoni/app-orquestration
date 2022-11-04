start:
	docker-compose up -d
	gnome-terminal --tab -- bash -ic "make server-backend"
	gnome-terminal --tab -- bash -ic "make server-frontend"

bash-backend:
	docker exec -it app-backend /bin/bash

bash-frontend:
	docker exec -it app-frontend /bin/bash

server-backend:
	docker exec -it app-backend rails s -b 0.0.0.0 -p 3001

server-frontend:
	docker exec -it app-frontend npm start

setup:
	docker exec -it app-backend rails db:create
	docker exec -it app-backend rails db:migrate
	docker exec -it app-backend rails db:seed

stop:
	docker-compose down

fix-permission:
	sudo chown $USER:$USER **/*

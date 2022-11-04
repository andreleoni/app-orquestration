# app-orquestration

Este é um repositório com o exemplo de orquestração de uma aplicação com front end React e backend Ruby on Rails desacoplados.

# Executar

Faz o setup do ambiente juntamente com os seeds do backend:

`make setup`

Iniciar webservices para desenvolvimento:

`make start`

Iniciar apenas o webserver backend:

`make server-backend`

Iniciar apenas o webserver frontend:

`make server-frontend`

Pausa os containers que estão executando:

`make stop`

Acessa o bash do container do backend:

`make bash-backend`

Acessa o bash do container do frontend:

`make bash-frontend`

# Problema com permissão de arquivos

Caso você tenha problema com permissão de arquivos gerados pelo docker, pode ser resolvido com o comando:

`sudo chown $USER:$USER -R .`

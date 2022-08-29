# Test Challenge Entravision

- Desde la terminal:
	- Nos ubicamos en la carpeta /mysql e iniciamos el contenedor
		- ```docker-compose up```
	- Nos ubicamos en la carpeta /api y ejecutamos lo siguiente
        - 1. ```npm i```
		- 2. ```node ace migration:run```
		- 3. ```node ace db:seed```
        - 3. ```node ace serve```
	- Nos ubicamos en la carpeta /front y ejecutamos lo siguiente
		- 1. ```npm i```
        - 2. ```ng serve```

### Puertos a utilizar:
  - Mysql: 3320
  - Api http://localhost:3333
  - Front http://localhost:4200/

### Consumo de api:

|URL|Método|Respuesta
|----|----|------------
|http://localhost:3333/teams|GET|Equipos
|http://localhost:3333/team/:id|GET|Datos de un equipo dado
|http://localhost:3333/competitions/|GET| Lista de competiciones o ligas
|http://localhost:3333/competitions/:code/teams|GET|Equipos y jugadores de una liga
|http://localhost:3333/players|GET|Jugadores
|http://localhost:3333/players/:id|GET|Datos de un jugador dado


### Las rutas anteriomente mencionadas, se pueden consumir desde el front directamente
    - http://localhost:4200

Autor: Fabian Silva
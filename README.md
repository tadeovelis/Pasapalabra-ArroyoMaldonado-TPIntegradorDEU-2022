# Pasapalabras del Arroyo Maldonado

## ¿Cómo instalarlo?

Has dos maneras: una es clonando el repositorio de GitHub, instalando las dependencias y ejecutando la aplicación, la otra es mediante Docker.

### - Mediante Docker

Primero, descargamos la imagen desde Docker Hub:

`docker pull sperri/pasap`

Ahora ejecutamos la aplicación:

`docker run -p 3500:3000 sperri/pasap`

Accedemos a [http://localhost:3500](http://localhost:3500) desde cualquier navegador para acceder al juego.

### - Clonando el repositorio de GitHub

Clonamos el proyecto:

`git pull https://github.com/tadeovelis/Pasapalabra-ArroyoMaldonado-TPIntegradorDEU-2022.git`

Nos paramos en la raíz del proyecto:

`cd Pasapalabra-ArroyoMaldonado-TPIntegradorDEU-2022`

Instalamos las dependencias:

`npm install`

Finalmente, corremos la aplicación en development con:

`npm start`

Accedemos a [http://localhost:3000](http://localhost:3000) desde cualquier navegador para acceder al juego.

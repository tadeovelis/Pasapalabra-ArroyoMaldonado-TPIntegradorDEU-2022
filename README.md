# Pasapalabras del Arroyo Maldonado

## Acerca de la aplicación

El Pasapalabras del Arroyo Maldonado es un juego basado en el formato del programa de televisión "Pasapalabras", emitido en Argentina y España. Este programa, a su vez, es una versión adaptada del original británico "The Alphabet Game". Este formato de juego pone a prueba tus conocimientos sobre la lengua utilizada en concreto y sobre conceptos de cualquier índole, de una forma dinámica y muy entretenida. Nuestra versión está enfocada solamente en temáticas relacionadas a las inundaciones, lluvias, fenómenos naturales asociados y recomendaciones y consejos sobre cómo actuar ante estas situaciones. ¿Por qué? **Porque esta aplicación fue diseñada y desarrollada para la materia Diseño de Experiencia de Usuario de la Facultad de Informática, UNLP, en 2022, y se diseñó en el marco del proyecto de difusión y educación promovido por distintas facultades de la UNLP, sobre las inundaciones de la región de La Plata**. Específicamente, nos centramos en la de 2013 y en la región del Arroyo Maldonado.

Se ha realizado un extenso y muy valioso [trabajo de investigación](http://sedici.unlp.edu.ar/handle/10915/59633). ¡Pasá a mirarlo!

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

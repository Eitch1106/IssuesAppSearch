# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

Deberás clonar el repositorio, y ejecutar dentro del proyecto:
### `npm install`

Para asegurarnos de que se instalen las dependencias utilizadas, y posterior ejecutar:
### `npm start`

# Search-Issues webapp

## Descripción

Esta webapp se desarrolló con el fin de realizar la búsqueda de issues de React en su repositorio de GitHub, filtrando con palabras clave y extrayendo solo aquellas que lleven por label "BUG".

## Design UI

El diseño se centró en mostrarlo lo más minimalista posible, por ello se hizo uso de la librería picoCSS, la cual tiene por característica aportar un diseño full minimalista.

* Cuenta con un input para el ingreso de las palabras clave a buscar.
* Tiene un botón "search" para que se realice la búsqueda a través de la API y no existan peticiones concurridas e innecesarias al servidor de GitHub por cada letra tecleada.
* Se agregó un `content` para mostrar el listado de issues encontrados.
* Para una mejor experiencia del usuario, se agregó un scroll infinito para que al ir desplegando sobre los resultados sean demasiados, se vayan listando poco a poco de forma automática.
* También se creó un pequeño efecto de difuminado para que se note cuando se realiza una nueva búsqueda.

## Código & Funciones

En la codificación, se hizo uso de los hooks más comunes para el manejo correcto de eventos que se necesitaban manipular y así obtener los resultados deseados.
También utilicé Axios para la interacción con la API por facilidad que te brinda.

No se hizo uso del archivo `.env` ya que se creó el proyecto con `create-react-app` y al añadir el archivo deseado para manipular el token no lo compilaba bien.

## Nota

Deberás crear un TOKEN personal de GitHub para que lo añadas en el archivo `ApiGithub.js` donde viene comentada la línea donde deberás hacerlo.

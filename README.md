# Weather-Journal App Project

## Overview
This project's goal is to create an asynchronous web app that uses API and user data to dynamically update the UI. 

## PreRequisite Knowledge
- Asynchronous JavaScript
- JavaScript Promises
- Node
- Express
- Concept of async and await
- JSON
- Use of Fetch
- GET and POST
- Chaining Promises

## Installation
1. Install node to local machine.
2. Install Express using the command
    ```command
    npm install express
    ```
3. The project file server.js requires Express:
    ```javascript
    const express = require('express')
    ```
4. An instance of the app is created with Express:
    ```javascript
    const app = express();
    ```
5. The Express app instance is pointed to the project folder with .html, .css and .js files:
    ```javascript
    app.use(express.static('website'));
    ```
6. Install dependencies like 'body-parser' and 'cors' and included in the project:
    ```javascript 
    const bodyParser = require('body-parser');
    const cors = require('cors')
    app.use(cors());
    ```
### Use of OpenWeatherMap API

1. The API URL, personal API Key (provided by the [OpenWeatherMap API](https://openweathermap.org/guide) documentation) and dynamic value entered by the user are used to get weather API data

2. API Key is then passed as a parameter to `fetch()`.

3. Data is successfully returned from the external API.

## Acknowledgments

Thanks to Udacity for the Asynchronous Javascript course and [starter code](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app).


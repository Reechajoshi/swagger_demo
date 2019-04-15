var express = require("express");

var app = express();
app.use(express.static('public'));

var routes = require('./routes.js')(app);
console.log("routes->> ", routes);
routes();

/*var swaggerJSDoc = require('swagger-jsdoc');

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};
// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./**/routes/*.js','./routes.js'],// pass all in array 
  };
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);*/


app.listen(3000);
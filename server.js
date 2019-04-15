var express = require("express");

var app = express();
app.use(express.static('public'));


var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');

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
var swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// inject swagger in routes
app.get('/swagger.json', function(req, res) { console.log("HIT", swaggerSpec);  
    res.setHeader('Content-Type', 'application/json');   
    res.send(swaggerSpec); 
});
require("./routes.js")(app, swaggerSpec);

app.listen(3000);

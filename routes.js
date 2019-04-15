
 module.exports = function (app, swaggerSpec) {
	console.log("routes.js called");

	app.get('/', (req, res) => {
		res.send("WOrking");
	});

	

	/**
	* @swagger
	* definition:
	*   users:
	*     properties:
	*       namEe:
	*         type: string
	*       email:
	*         type: string
	*       age:
	*         type: integer
	*       sex:
	*         type: string
	*/

	/**
	* @swagger
	* /api/users:
	*   get:
	*     tags:
	*       - users
	*     description: Returns all users
	*     produces:
	*       - application/json
	*     responses:
	*       200:
	*         description: An array of users
	*         schema:
	*           $ref: '#/definitions/users'
	*/
	app.get('/api/users', function(req, res) {
		res.send("ok");
	});

};
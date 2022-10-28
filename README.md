# CRUD API with Express

It is a simple and fast CRUD API created with Express (NodeJS) simulating an user registration platform.

The routes are **"/"** with *GET* and *POST* methods and **"/:username"** with *PUT* and *DELETE* methods.
You don't need any parameters to do a GET. To create a POST request, you need to send a JSON body with *username* and *password* parameters, both *strings*.
To update some user, you need to send the current username in URL and the new username in JSON Body in a PUT request. Last but not least, to delete an user, you must only submit the username via the URL.

### How to use

To run this API, you must have NodeJS installed on your machine. Then run `npm install` in terminal to get all the dependencies on your *node_modules*.
If you already have the *Nodemon* you can run `nodemon app.js`, otherwise you can just use `node app.js`. It will run on port 8081 of your localhost.
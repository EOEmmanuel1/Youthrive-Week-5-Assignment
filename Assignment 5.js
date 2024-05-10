// (A) INSTALLING NODE JS

// Download Node.js Installer*: Visit the official Node.js website at https://nodejs.org/

// 1.	Run the Installer: 
// 2.Complete the Installation**: 
// 3. Verify Installation**: 
// - To check if Node.js is installed, run: `node -v`
//    - To check if npm is installed, run: `npm -v`
//    - Both commands should output the respective version 
// numbers if Node.js and npm are installed successfully.


// Setting up a Node.js server from scratch involves several steps.
// Here’s a basic guide:

// 1.	Initialize a Node.js project**: Create a new directory for your project and navigate into it using the terminal. Then, initialize a new Node.js project by running `npm init` and follow the prompts to create a `package.json` file. This file will contain metadata about your project and its dependencies.

// 2.	Install Express: Express is a popular web application framework for Node.js. Install it as a dependency for your project by running `npm install express` in the terminal.


// 3.	Create a server file: Create a new JavaScript file (e.g., `server.js`) in your project directory. This file will contain the code to set up your Node.js server using Express.

// 4.	Import required modules: In your `server.js` file, import the Express module using `require(‘express’)`.


// 5.	Create an instance of Express: Initialize an instance of Express by calling `express()` and store it in a variable (e.g., `const app = express();`).

// 6.	Define routes**: Use Express’s routing system to define the endpoints for your server. You can do this by calling methods like `app.get()`, `app.post()`, `app.put()`, `app.delete()`, etc., and specifying the route path and handler function for each endpoint.


// 7.	**Implement middleware**: Middleware functions are functions that have access to the request and response objects and can perform tasks like logging, authentication, parsing request bodies, etc. Use Express’s `app.use()` method to implement middleware functions and add them to the request-response cycle.

// 8.	**Start the server**: Finally, use the `app.listen()` method to start the server and specify the port number on which it should listen for incoming requests (e.g., `app.listen(3000)`).


// 9.	**Run the server**: Save your changes to `server.js` and run the server by executing `node server.js` in the terminal. You should see a message indicating that the server is running on the specified port.

// 10.	**Test the server**: Use a tool like cURL, Postman, or a web browser to send requests to your server and verify that it is working correctly.
 
//PURPOSE OF EXPRESS
//Express is a web application framework for Node.js that simplifies the process of building
// web servers and APIs. Its primary purpose is to streamline the development of web applications
// by providing a set of features and tools that make common tasks, such as routing, middleware 
//integration, request handling, and response generation, more straightforward and efficient.
  

// (B) NODEMON
//Nodemon is a utility for Node.js that monitors changes in your application files
// and automatically restarts the server when changes are detected. It aids in the 
//development process by saving developers time and effort, as they don’t have to manually 
//stop and restart the server every time they make changes to their code.

 // (C) BASIC ENDPOINT TO HANDLE A GET REQUEST TO FETCH

 Const express = require(‘express’);
 Const app = express();
 Const port = 3000;
 
 // Sample array of products
 Const products = [
   { id: 1, name: ‘Product 1’, price: 10 },
   { id: 2, name: ‘Product 2’, price: 20 },
   { id: 3, name: ‘Product 3’, price: 30 },
 ];
 
 // Endpoint to fetch array of product details
 App.get(‘/products’, (req, res) => {
   Res.json(products);
 });
 
 // Start the server
 App.listen(port, () => {
   Console.log(`Server running on port ${port}`);
 });
 
 


// (D) Node Js  Endpint to POST new product

Const express = require(‘express’);
Const bodyParser = require(‘body-parser’);

Const app = express();
Const port = 3000;

// Sample array of products
Let products = [
  { id: 1, name: ‘Product 1’, price: 10 },
  { id: 2, name: ‘Product 2’, price: 20 },
];

// Middleware to parse JSON bodies
App.use(bodyParser.json());

// POST endpoint to add a new product
App.post(‘/products’, (req, res) => {
  Const { name, price } = req.body;

  // Generate a random ID for the new product
  Const id = Math.floor(Math.random() * 1000) + 1;

  // Create the new product object
  Const newProduct = { id, name, price };

  // Add the new product to the array
  Products.push(newProduct);

  // Send a response with the updated array of products
  Res.json({ message: ‘Product added successfully’, products });
});

// Start the server
App.listen(port, () => {
  Console.log(`Server running on port ${port}`);
});

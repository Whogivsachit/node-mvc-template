const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// Setup our app
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Import our controllers
const indexController  = require("./controllers/indexController");

// Setup our routes
app.get("/", indexController.view);

// Serve the project
app.listen(process.env.PORT, () => console.log(`it's alive on http://${process.env.HOST}:${process.env.PORT}`));
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
// Set Handlebars.
var exphbs = require("express-handlebars");
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var port = process.env.PORT || 8475;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
// LISTENER
// The below code effectively "starts" our server
app.listen(port, function() {
    console.log("App listening on http://localhost:" + port);
  });

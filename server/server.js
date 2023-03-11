const express = require("express");
// const cors = require("cors");
const app = express();
const port = 8000;

require("./config/mongoose.config");

// app.use(cors())
/* The code below allows us to access POST data. They provide and
parse the request.body data */
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./routes/product.routes")(app);

// The following line of code actually runs our server on a specified port
app.listen( port, () => console.log(`Listening on port: ${port}`) );
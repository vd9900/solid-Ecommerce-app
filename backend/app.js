const Express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = Express();

const errorHandler = require("./middleware/error");

app.use(Express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/vi", product, user, order);
// app.use("/api/", user)

// middleware for error
app.use(errorHandler);

module.exports = app;

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const errorHandler = require("./middleware/error");
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");
const cartRoutes = require("./routes/cartRoute");
const MongoStore = require("connect-mongo");
const logger = require("morgan");

const app = express();

// Allow requests from all domains
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://vd9900.github.io/solid-Ecommerce-app/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.use("/api/vi", productRoutes, userRoutes, orderRoutes, cartRoutes);

// Error middleware
app.use(errorHandler);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve());
});

module.exports = app;

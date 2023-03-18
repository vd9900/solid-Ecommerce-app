const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const errorHandler = require("./middleware/error");
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");
const cartRoutes = require("./routes/cartRoute");

const app = express();

// Middleware
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

module.exports = app;

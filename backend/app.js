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

// Middleware

app.use(logger("dev"));
app.use(
  cors({
    origin: ["https://vd9900.github.io", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(
  session({
    secret: config.domain,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://new-user_99:9900787798@cluster0.koih8os.mongodb.net/?retryWrites=true&w=majority",
      autoRemoveInterval: 15 * 60 * 1000,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
    saveUninitialized: true,
    cookie: { secure: true, sameSite: "none" },
  })
);

// Routes
app.use("/api/vi", productRoutes, userRoutes, orderRoutes, cartRoutes);

// Error middleware
app.use(errorHandler);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve());
// });

module.exports = app;

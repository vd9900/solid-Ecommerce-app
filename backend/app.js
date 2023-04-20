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
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://new-user_99:9900787798@cluster0.koih8os.mongodb.net/?retryWrites=true&w=majority",
    }),
    cookie: {
      sameSite: "lax",
      secure: "auto",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      httpOnly: "true",
    },
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

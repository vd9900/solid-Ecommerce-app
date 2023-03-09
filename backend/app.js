const Express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = Express();

const errorHandler = require("./middleware/error");
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//session
app.set("trust proxy", 1); // trust first proxy)
app.use(Express.json());
app.use(cookieParser());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const cart = require("./routes/cartRoute");

app.use("/api/vi", product, user, order, cart);
// app.use("/api/", user)

// middleware for error
app.use(errorHandler);

module.exports = app;

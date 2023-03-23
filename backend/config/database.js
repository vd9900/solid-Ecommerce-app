const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1/Ecommerce", { useNewUrlParser: false })
    .then((res) => console.log("Sever connected to Database"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

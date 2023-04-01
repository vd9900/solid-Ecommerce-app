const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
console.log(process.env.DB_URL)
const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, { useNewUrlParser: false })
    .then((res) => console.log("Sever connected to Database"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

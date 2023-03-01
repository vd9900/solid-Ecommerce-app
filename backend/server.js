const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: `backend/config/config.env ` });
const connectDB = require("./config/database");

//configration

connectDB();

app.listen(5000, (e) => {
  console.log(`Server running on http://localhost:${e,process.env.PORT}`);
});

//unhandled Promise Rejection
// process.on("unhandledRejection",

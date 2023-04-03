const app = require("./app");
const os = require("os");
const cluster = require("cluster");

if (process.env.NODE_ENV !== "PROD") {
  require("dotenv").config({ path: `../backend/config/config.env` });
}
const connectDB = require("./config/database");

//configration
require("dotenv").config();
connectDB();
const CPU_cores = os.cpus().length;

if (cluster.isMaster) {
  for (i = 0; i < CPU_cores; i++) {
    cluster.fork();
  }
  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  app.listen(process.env.PORT, (e) => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
  console.log(`working cluster is ${process.pid}`);
}

//unhandled Promise Rejection
// process.on("unhandledRejection",

const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 4000 } = process.env;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT), console.log("Database connection successful"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

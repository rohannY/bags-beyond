const mongoose = require("mongoose");
const clc = require("cli-color");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      clc.black.bgCyanBright(`DB connected -> ${conn.connection.host}`)
    );
  } catch (err) {
    console.log(clc.bgRedBright.white(err.message));
    process.exit(1);
  }
};

module.exports = connectDB;

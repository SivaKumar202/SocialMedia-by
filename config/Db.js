const mongooes = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ silent: true });
const connectDB = async () => {
  try {
    const connection = await mongooes.connect(process.env.MONO_URI);
    console.log("DB is connected");
  } catch (error) {
    console.log(`error is :${error}`);
  }
};


module.exports = connectDB;
const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/Baigiamasis";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Duomenų bazė prisijungė sėkmingai!");
  } catch (error) {
    console.error("Klaida prisijungiant prie duomenų bazės:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

const express = require("express");
const connectDB = require("./mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const clientRouter = require("./routes");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/clients", clientRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

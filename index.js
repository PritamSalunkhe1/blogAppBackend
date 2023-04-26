const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, () => {
  console.log(`App is running on ${PORT} `);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is my homepage</h1>`);
});

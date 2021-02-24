const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
    
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gym-log", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
      useCreateIndex: true
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
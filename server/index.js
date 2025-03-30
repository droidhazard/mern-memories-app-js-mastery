import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://droidgamezz:droidgamezz1@cluster0.wnfwpoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("App listening on: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Can't connect to database, ", err.message);
  });

// mongoose.set("useFindAndModify", false); // Removed Option

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", router);

const CONNECTION_URL = `mongodb+srv://username:password@cluster0.wnfwpoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("App listening on: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Can't connect to database, ", err.message);
  });

// mongoose.set("useFindAndModify", false); // Removed Option

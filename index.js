import express from "express";
//body parser...
import bodyParser from "body-parser";
import mongoose from "mongoose";
//cors ....
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

const CONNECTION_URL =
  "mongodb+srv://kevinbhavsar9:kevinbhavsar10@cluster0.8nqea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    //for avoiding error or warning
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => console.log(`server running on port ${PORT} `));
  })
  .catch((error) => console.log(error.message));

//for avoiding error or warning
mongoose.set("useFindAndModify", false);

// import { json } from "body-parser";
import express from "express";
import postRoute from "./routes/posts.js";
import cors from "cors";
const app = express();

app.use(cors("*"));
app.use(express.json());
app.use("/api/post/", postRoute);
app.listen(8800, () => {
  console.log("Server running on port 8800");
});

import express from "express";
import {
  getPosts,
  getPost,
  savePost,
  updatePost,
  deletePost,
} from "../controllers/post.js";

const route = express.Router();

route.get("/getposts", getPosts);
route.get("/getpost/:id", getPost);
route.delete("/deletepost/:id", deletePost);
route.post("/savepost", savePost);
route.put("/updatePost", updatePost);

export default route;

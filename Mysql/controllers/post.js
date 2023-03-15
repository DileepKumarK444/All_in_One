import { db } from "../connect.js";
//Get all posts
export const getPosts = (req, res) => {
  const q = "SELECT * FROM posts";
  db.query(q, (err, data) => {
    if (err) return res.status(400).json(err);

    res.status(200).json(data);
  });
};
//Get Single post
export const getPost = (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM posts WHERE id=?";
  db.query(q, [id], (err, data) => {
    if (err) return res.status(400).json(err);

    res.status(200).json(data[0]);
  });
};
//Save Post
export const savePost = (req, res) => {
  const q = "SELECT * FROM posts WHERE title=?";
  db.query(q, [req.body.title], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Post Already exist");

    const q = "INSERT INTO posts (`title`,`slug`,`body`) VALUES (?)";
    const values = [req.body.title, req.body.slug, req.body.body];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been saved.");
    });
  });
};

//Update Post
export const updatePost = (req, res) => {
  const q = "UPDATE posts SET `title`=?,`slug`=?,`body`=? WHERE `id`=?";

  db.query(
    q,
    [req.body.title, req.body.slug, req.body.body, req.body.id],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been Updated.");
    }
  );
};

//Delete Post
export const deletePost = (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM posts WHERE `id`=?";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    const q = "SELECT * FROM posts";
    db.query(q, (err, data) => {
      if (err) return res.status(400).json(err);

      return res.status(200).json(data);
    });
  });
};

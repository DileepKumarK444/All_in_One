import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3307",
  database: "ci3_blog",
});

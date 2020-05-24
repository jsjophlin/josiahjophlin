import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () =>
  fs.readdirSync("content/blog").map((fileName) => {
    const post = fs.readFileSync(
      path.resolve("content/blog", fileName),
      "utf-8"
    );
    return grayMatter(post).data;
  });

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const posts = getAllPosts();
  res.end(JSON.stringify(posts));
}

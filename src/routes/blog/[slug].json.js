import path from "path";
import fs from "fs";
import { buildContent } from "../../util/markdownHelpers";

const dir = "content/blog";
const getPost = (fileName) =>
  fs.readFileSync(path.resolve(dir, `${fileName}.md`), "utf-8");

export function get(req, res, next) {
  const { slug } = req.params;

  // get the markdown text
  const post = getPost(slug);
  const { data, html } = buildContent(post);

  if (html) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}

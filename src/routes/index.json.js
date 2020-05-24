import path from "path";
import fs from "fs";
import { buildContent } from "../util/markdownHelpers";

const dir = "content";
const filename = "index.md";

export function get(req, res, next) {
  // get the markdown text
  const post = fs.readFileSync(path.resolve(dir, filename), "utf-8");

  // generate the html and data
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

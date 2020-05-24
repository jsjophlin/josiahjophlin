import grayMatter from "gray-matter";
import marked from "marked";
import hljs from "highlight.js";

export const buildContent = (c) => {
  // function that expose helpful callbacks
  // to manipulate the data before convert it into html
  const renderer = new marked.Renderer();

  // use hljs to highlight our blocks codes
  renderer.code = (source, lang) => {
    const { value: highlighted } = hljs.highlight(lang, source);
    return `<pre class='language-javascriptreact'><code>${highlighted}</code></pre>`;
  };

  // parse the md to get front matter
  // and the content without escaping characters
  const { data, content } = grayMatter(c);

  return {
    data,
    html: marked(content, { renderer }),
  };
};

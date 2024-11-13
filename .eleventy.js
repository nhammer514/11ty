const hljs = require('highlight.js/lib/core');
const markdownIt = require("markdown-it");

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addLayoutAlias("note", "layouts/note.njk");

    const markdownLib = markdownIt({
        html: true,
        highlight: function (code, language) {
          if (language && hljs.getLanguage(language)) {
            return `<pre class="hljs"><code class="language-${language}">${hljs.highlight(code, { language }).value}</code></pre>`;
          }
          return `<pre class="hljs"><code>${hljs.highlightAuto(code).value}</code></pre>`;
        }
      });
    
      // Set the new Markdown-it instance for Eleventy
      eleventyConfig.setLibrary("md", markdownLib);

    return{
        dir: {
            input: "_src",
            output: "_site"
        },
    };
};
import markdownIt from "markdown-it";

export default function(eleventyConfig) {
  // Copy assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget("src/js");
  eleventyConfig.addWatchTarget("src/img");

  // Add markdown filter for Nunjucks
  const md = markdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.addNunjucksFilter("markdown", (str) => md.render(str));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    markdownTemplateEngine: "njk"
  };
}
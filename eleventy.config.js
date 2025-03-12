import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  // Plugins
  // Highlight syntax within code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // Passthroughs
  // _site/images/
  eleventyConfig.addPassthroughCopy("images");
  // _site/bundle.css
  eleventyConfig.addPassthroughCopy("bundle.css");
  // _site/favicon.ico
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Copyright shortcode
  eleventyConfig.addShortcode(
    "copy",
    async () => `&#169;&nbsp;${new Date().getFullYear()}&nbsp;Micheal&nbsp;Earl`
  );

  // Utilities
  // Reverse the order of the posts collection so that the newest post is first
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md").reverse();
  });
}

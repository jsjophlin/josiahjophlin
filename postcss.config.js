const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.svelte"],
  whitelist: ["active", "grid-cols-2", "grid-cols-3", "grid-cols-4"],
  whitelistPatterns: [/svelte-/],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const production = process.env.NODE_ENV !== "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    ...(production ? [purgecss] : []),
  ],
};

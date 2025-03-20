module.exports = {
  map: { inline: false },
  plugins: [
    require("cssnano")({
      preset: "default", // Minifies the CSS
    }),
  ],
};

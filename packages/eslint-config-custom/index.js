module.exports = {
  extends: ["vite", "turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("vite/swc-preset")],
    },
  },
};

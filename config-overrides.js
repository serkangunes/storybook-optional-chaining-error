const {
  override,
  addBabelPlugin
  // useBabelRc
  // addDecoratorsLegacy,
  // disableEsLint,
  // addBundleVisualizer,
  // addWebpackAlias,
  // adjustWorkbox
} = require("customize-cra");
// const path = require("path");

module.exports = override(
  addBabelPlugin("@babel/plugin-proposal-optional-chaining")
);

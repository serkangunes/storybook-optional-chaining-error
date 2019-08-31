// const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

const findBabelLoader = config =>
  config.module.rules.findIndex(
    rule =>
      rule.use &&
      rule.use[0] &&
      rule.use[0].loader &&
      rule.use[0].loader.includes("babel")
  );

const addBabelPlugin = plugin => config => {
  config.module.rules[findBabelLoader(config)].use[0].options.plugins.push(
    plugin
  );
  return config;
};

// const addBabelPreset = preset => config => {
//   config.module.rules[findBabelLoader(config)].use[0].options.presets.push(
//     preset
//   );
//   return config;
// };

module.exports = ({ config }) => {
  if (!config.resolve.plugins) {
    config.resolve.plugins = [];
  }
  // config.resolve.plugins.push(
  //   new DirectoryNamedWebpackPlugin({
  //     exclude: /node_modules/
  //   })
  // );
  config = addBabelPlugin("@babel/plugin-proposal-optional-chaining")(config);
  // config = addBabelPreset("@emotion/babel-preset-css-prop")(config);
  return config;
};

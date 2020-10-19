const path = require('path');
module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "scoped"
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions:{
              includePaths: [path.resolve('src/')],
            }
          },
        },
      ]
    });

    return config;
  }
};
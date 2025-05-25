const path = require('path');

module.exports = {
  defaultValues: {
    npmDependencies: [
      '@jverneaut/html-to-gutenberg',
      '@10up/block-components',
      'remove-files-webpack-plugin',
    ],
    customScripts: {
      "build": "wp-scripts build --config ./src/webpack.config.js --blocks-manifest",
      "start": "wp-scripts start --config ./src/webpack.config.js --blocks-manifest",
    }
  },
  blockTemplatesPath: path.join(__dirname, 'block-templates'),
};

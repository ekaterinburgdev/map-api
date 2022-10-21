'use strict';

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

export default (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.plugins.push(new MonacoWebpackPlugin());

  return config;
};
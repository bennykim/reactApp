const { override, addDecoratorsLegacy, disableEsLint } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  ((config) => {
    config.devtool = 'hidden-srouce-map';
    return config
  })
)

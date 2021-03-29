const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
    mode: 'production',
});

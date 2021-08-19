/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const exclusionList  = require('metro-config/src/defaults/exclusionList')
 
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'json' ,'jsx', 'ts', 'tsx'],
    blacklistRE: exclusionList([/amplify\/#current-cloud-backend\/.*/]),
  },
};

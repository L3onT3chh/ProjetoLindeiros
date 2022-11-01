
const { override, addWebpackAlias } = require("customize-cra")
const path = require('path')

const rootImport = {
  '@': path.resolve(__dirname, 'src')
}

module.exports = override(addWebpackAlias(rootImport))
/* 
    // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject"
 */
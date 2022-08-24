const path = require("path");

module.exports = {
    reactScriptsVersion: "react-scripts",
    style: {
        sass: {
            loaderOptions: {
                additionalData: `@import "src/scss/_variables.scss";`,
            }
        }
    },
    webpack: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src/components')
        }
    }
}
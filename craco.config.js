
module.exports = {
    reactScriptsVersion: "react-scripts",
    style: {
        sass: {
            loaderOptions: {
                additionalData: `@import "src/scss/_variables.scss";`,
            }
        }
    }
}
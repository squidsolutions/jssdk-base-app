({
    mainConfigFile : "app/main.js",
    appDir: "./",
    baseUrl: "app",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "dist",
    optimize: "none",
    optimizeCss: "standard",
    modules: [
        {
            name: "main",
            exclude: [
                "jssdk"
            ]
        },
        {
            name: "jssdk"
        }
    ],
    generateSourceMaps: true
})
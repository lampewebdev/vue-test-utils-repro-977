module.exports = {
    preset: "ts-jest",
    verbose: true,
    globals: {
        "ts-jest": {
            babelConfig: true,
            diagnostics: false,
        },
    },
    collectCoverage: true,
    coverageDirectory: "tests/__coverage__",
    coverageReporters: ["html", "text"],
    coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 100,
            functions: 60,
            lines: 80,
        },
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
    transform: {
        "^.+\\js$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest",
        ".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$":
            "jest-transform-stub",
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        // "\\.[jt]sx?$": "babel-jest"
    },
    transformIgnorePatterns: ["/node_modules/"],
    // support the same @ -> src alias mapping in source code
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    // serializer for snapshots
    snapshotSerializers: ["jest-serializer-vue"],
    testMatch: [
        "**/tests/unit/**/*.spec.[jt]s?(x)",
        "**/__tests__/*.[jt]s?(x)",
    ],
    // https://github.com/facebook/jest/issues/6766
    testURL: "http://localhost/",
    watchPlugins: [
        require.resolve("jest-watch-typeahead/filename"),
        require.resolve("jest-watch-typeahead/testname"),
    ],
};

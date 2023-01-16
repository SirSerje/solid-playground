const config = {
    verbose: true,
    preset: "solid-jest/preset/browser",
    setupFilesAfterEnv: [
        "<rootDir>/jest-setup.ts"
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};

module.exports = config;

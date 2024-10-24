module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
  };
  
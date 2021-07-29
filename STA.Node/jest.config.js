module.exports = {
  verbose: true,
  testEnvironment: "node",
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  projects: [
    {
      displayName: "sta-node",
      testMatch: ["<rootDir>/**/__tests__/*.js"],
    },
  ],
};

const { docusign } = require("../docusign");

test("Runs", () => {
  const result = docusign();
  expect(result).toBe(222);
});

const { docusign, fetchAuth } = require("../docusign");

test("Runs", () => {
  const result = docusign();
  expect(result).toBe(222);
});

test("Fetching auth from docusign", () => {
  expect(fetchAuth()).toBe(true);
});

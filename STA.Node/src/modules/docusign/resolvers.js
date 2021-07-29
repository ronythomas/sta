const { docusign } = require("./docusign");

module.exports = {
  Query: {
    envelopes: () => [{ test: true }],
  },
  Mutation: {
    addEnvelope: (_, { id }) => {
      return { id };
    },
  },
  DocusignEnvelope: {
    id: () => docusign(),
  },
};

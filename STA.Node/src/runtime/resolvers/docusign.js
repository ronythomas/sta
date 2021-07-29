const { docusign } = require("@services/docusign/docusign");

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

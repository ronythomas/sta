const { fetchAuthUrl, docusign } = require("@services/docusign/docusign");

module.exports = {
  Query: {
    docusignAuthUrl: () => fetchAuthUrl(),
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

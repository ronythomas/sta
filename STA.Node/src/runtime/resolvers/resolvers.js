module.exports = {
  Query: {
    status: (_, __, ctx) => `Online ${JSON.stringify(ctx)}`,
  },
  Mutation: {
    updateStatus: () => "Online",
  },
};

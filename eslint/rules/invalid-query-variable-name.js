const validMutationHooks = ['useMutationWithToast', 'useMutation'];
const validQueryHooks = ['useQuery'];

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'This rule adds enforcement for variable declaration to be in valid format.',
      recommended: false,
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      // visitor functions for different types of nodes
      VariableDeclaration: function (node) {
        if (
          validMutationHooks.includes(node.declarations[0].init?.callee?.name)
        ) {
          if (!node.declarations[0].id?.name?.endsWith('Mutation')) {
            context.report({
              node: node.declarations[0].id,
              message: "Identifier name must end with 'Mutation'",
            });
          }
        }
        if (validQueryHooks.includes(node.declarations[0].init?.callee?.name)) {
          if (!node.declarations[0].id?.name?.endsWith('Query')) {
            context.report({
              node: node.declarations[0].id,
              message: "Identifier name must end with 'Query'",
            });
          }
        }
      },
    };
  },
};

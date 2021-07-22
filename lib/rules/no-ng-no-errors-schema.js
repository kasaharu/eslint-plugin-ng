"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "",
      category: "Best Practices",
      recommended: true,
      url: "https://github.com/kasaharu/eslint-plugin-no-ng-no-errors-schema"
    },
    fixable: "code",
    schema: [] // no options
  },
  create: function(context) {
    return {
      Identifier: function(node) {
        if (node.name.indexOf("NO_ERRORS_SCHEMA") !== -1 ) {
          context.report({ node: node, message: "NO_ERRORS_SCHEMA は非推奨です" });
        }
      }
    };
  }
};
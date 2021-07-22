'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-ng-no-errors-schema');

const tester = new RuleTester();

tester.run('no-ng-no-errors-schema', rule, {
  valid: [
    { code: 'var text = "NO_ERRORS_SCHEMA";' },
    { code: '{ schemas: ["NO_ERRORS_SCHEMA"] }' },
  ],
  invalid: [
    { code: '{ schemas: [NO_ERRORS_SCHEMA] }', errors: ['NO_ERRORS_SCHEMA は非推奨です'] },
  ],
});
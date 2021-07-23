/**
 * @fileoverview description
 * @author kasaharu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    recommended: require("./configs/recommended"),
  },
  rules: {
    "no-ng-no-errors-schema": require("./rules/no-ng-no-errors-schema"),
  }
}

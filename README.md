# eslint-plugin-ng

The eslint-plugin-ng is an ESLint plugin to prevent Angular apps from using [NO_ERRORS_SCHEMA](https://angular.io/api/core/NO_ERRORS_SCHEMA).

## Installation

Install [ESLint](http://eslint.org) locally.

```
$ yarn add eslint -D
```

Next, install `eslint-plugin-ng`:

```
$ yarn add @kasaharu/eslint-plugin-ng -D
```

## Usage

Add `eslint-plugin-ng` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@kasaharu/ng"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@kasaharu/ng/no-ng-no-errors-schema": "error"
  }
}
```

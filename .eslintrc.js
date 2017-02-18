module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['standard', 'react'],
  rules: {
    indent: [2, 2, {"SwitchCase": 1}],

    //overrides
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'brace-style': ['error', 'stroustrup'],
    'eol-last': 0,
    'promise/param-names': 0,
    'strict': 0,

    //team rules
    'no-cond-assign': 2,
    'no-shadow': 2,

    // react
    'react/prop-types': [2, { ignore: ['children'] }]
  },

  //need these so that tests pass
  globals: {
    'describe': true,
    'xdescribe': true,
    'it': true,
    'expect': true,
    'beforeEach': true,
    'jasmine': true,
    'cd': true,
    'exec': true,
    'spyOn': true,
    'afterEach': true,
    'fail': true,
    'xit': true
  },
  plugins: ['react'],
  parserOptions: {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
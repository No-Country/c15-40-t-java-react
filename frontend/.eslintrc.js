module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    camelcase: 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: [
      'error',
      'always'
    ],
    indent: [
      'error',
      2
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};

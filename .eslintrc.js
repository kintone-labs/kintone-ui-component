module.exports = {
  extends: '@cybozu/eslint-config/presets/typescript',
  rules: {
    'no-undef': 0
  },
  overrides: [
    {
      'files': ['*.test.ts', '*.test.tsx'],
      'rules': {
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
      }
    }
  ]
};

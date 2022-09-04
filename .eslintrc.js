module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  plugins: [
    'react'
  ],
  rules: {
  }
}

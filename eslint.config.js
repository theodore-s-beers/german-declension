import js from '@eslint/js'

export default [
  {
    ignores: ['**/*.min.js']
  },

  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        console: 'readonly',
        document: 'readonly'
      }
    }
  }
]

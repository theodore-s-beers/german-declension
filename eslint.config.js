import js from '@eslint/js'

export default [
  {
    ignores: ['**/*.min.js'],

    languageOptions: {
      globals: {
        console: 'readonly',
        document: 'readonly'
      }
    },

    ...js.configs.recommended
  }
]

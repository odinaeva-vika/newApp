module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // анализ jsx в парсере по умолчанию
    },
  },
  env: {
    // где будет исполняться наш код
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'import', 'react-hooks', 'prettier'], // здесь мы подключаем используем
  parser: '@typescript-eslint/parser', // Парсер для обработки jsx кода
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      // Запретить неиспользуемые переменные
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^React$',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'react/jsx-props-no-spreading': 'warn', // Проверяет отсутствие расширения для любого атрибута jsx
    'react/react-in-jsx-scope': 'off', // Отключаем проверку на наличие React в области видимости JSX

    'no-console': ['error', { allow: ['error'] }], // Запретить использование console

    'import/order': [
      // правило сортировки импортов
      'error',
      {
        pathGroups: [
          {
            pattern: '@vtb/**',
            group: 'unknown',
          },
          {
            pattern: '@openvtb/**',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        group: ['builtin', 'external', 'unknown', 'internal'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'], // укажите путь к корневой папке вашего проекта, где находятся алиасы
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // расширения файлов, которые могут быть импортированы
      },
    },
  },
};

/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 14:58:08
 * @LastEditTime: 2020-12-23 17:48:43
 * @LastEditors: ilove523
 * @description: ''
 */

const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: ['@typescript-eslint', 'react'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:unicorn/recommended',
        'plugin:promise/recommended', // 优化 Promise 语法
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier/react', // disables react-specific linting rules that conflict with prettier
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // 关闭 ESLint 驼峰规则校验
        'unicorn/filename-case': [
            'error',
            {
                'cases': {
                    'kebabCase': true,
                    'camelCase': true,
                    'pascalCase': true
                }
            }
        ],
        'no-console': [
            "error",
            {
                allow: [
                    'log',
                    'warn',
                    'error',
                ],
            }
        ],
        'unicorn/no-reduce': 'off',
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v24.0.0/docs/rules/prevent-abbreviations.md
        'unicorn/prevent-abbreviations': [
            'error',
            {
                'checkDefaultAndNamespaceImports': 'internal',
                'checkShorthandImports': false,
                'checkProperties': false,
                'checkVariables': false,
                'checkFilenames': false
            }
        ],
        '@typescript-eslint/camelcase': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/v4.7.0/packages/eslint-plugin/docs/rules/no-empty-interface.md
        // This rule will silence warnings about extending a single interface without adding additional members
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                'allowSingleExtends': true,
            }
        ],
        // 增加对代码行宽度的限制
        'max-len': [
            'error',
            {
                code: 120
            },
        ],
        // 避免在 .ts 和 .tsx 文件中引入另一个文件模块会报错
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                jsx: 'never',
                js: 'never',
            },
        ],
        // 源码中使用单引号
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],
        // @see https://cloud.tencent.com/developer/section/1135795
        'object-curly-newline': [
            'error',
            {
                // 'ObjectExpression': 'always',
                // 'ObjectPattern': 'never',
                'consistent': true,
            },
        ],
        // @see http://www.verydoc.net/eslint/00003358.html
        'implicit-arrow-linebreak': [
            'error',
            'beside',
        ],
        // @see https://eslint.org/docs/rules/no-shadow
        'no-shadow': [
            'error',
            {
                'builtinGlobals': false,
                'hoist': 'functions',
                'allow': [
                    'Lang',
                    'Theme',
                    'ThemeOptions',
                    'TypographyOptions',
                    'Filter',
                ],

            },
        ],
        'no-use-before-define': 'off',
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        // These rules don't add much value, are better covered by TypeScript and good definition files
        'react/no-direct-mutation-state': 'off',
        'react/no-deprecated': 'off',
        'react/no-string-refs': 'off',
        'react/require-render-return': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ], // also want to use with ".tsx"
        'react/prop-types': 'off', // Is this incompatible with TS props type?
    },
    settings: {
        // 设置加速 TypeScript 搜索的配置
        'import/resolver': {
            node: {
                extensions: ['.tsx', '.ts', '.jsx', '.js'],
            },
            typescript: {},
            alias: {
              map: [
                ["@src", path.join(__dirname, "src")],
                ["@styles", path.join(__dirname, "src", "styles")],
                ["@components", path.join(__dirname, "src", "components")],
                ["@pages", "src/pages"],
                ["@app", "src/app"],
                ["@service", "src/service"],
                ["@routers", "src/routers"],
                ["@assets", "src/assets"],
                ["@i18n", "src/i18n"]
              ],
            },
        },
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect',
        },
    },
};

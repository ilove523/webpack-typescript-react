/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-11-27 17:34:38
 * @LastEditTime: 2020-12-17 11:22:23
 * @LastEditors: ilove523
 * @description: ''
 */
import { babelLoader, imageUrlLoader } from './useLoaderRuleItems';

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};
/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
export const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [ babelLoader ],
    exclude: /node_modules/,
};

/**
 * @see https://webpack.js.org/loaders/html-loader
 */
export const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
    use: [ imageUrlLoader ],
    
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',
};

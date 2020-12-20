/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
const { argv } = require('yargs');

module.exports = (api) => {
    const env = argv.env || [];
    const mode = !!env.find((value) => value === 'mode=dev')
        ? 'development'
        : 'production';

    // This caches the Babel config by environment.
    api.cache.using(() => mode);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                    },
                    useBuiltIns: 'usage',
                    debug: false,
                    corejs: 3,
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/proposal-object-rest-spread',
            // Applies the react-refresh Babel plugin on non-production modes only
            mode !== 'production' && 'react-refresh/babel',
            // [
            //   "module-resolver",
            //   {
            //     "root": ["./src"],
            //     "alias": {
            //       "@styles": "./styles",
            //       "@components": "./components",
            //       "@pages": "./pages",
            //       "@app": "./app",
            //       "@service": "./service",
            //       "@routers": "./routers",
            //       "@assets": "./assets",
            //       "@i18n": "./i18n",
            //     }
            //   }
            // ],
        ].filter(Boolean),
    };
};

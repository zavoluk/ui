const path = require('path');

module.exports = {
    stories: ['../src/**/*.story.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader')
                },
                // Optional
                {
                    loader: require.resolve('react-docgen-typescript-loader')
                }
            ]
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.modules.push(path.resolve('src'));
        return config;
    },
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-notes/register',
        '@storybook/addon-viewport/register'
    ]
};

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-styled-components',
        [
            'module-resolver',
            {
                alias: {
                    assets: './src/assets',
                    pages: './src/pages',
                },
            },
        ],
    ],
}

const path = require('path')

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['media.graphassets.com'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "/src/styles/settings/_colors.scss";`,
    },
    'typescript.tsconfigPath': './tsconfig.json',
}

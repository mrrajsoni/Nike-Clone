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
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}

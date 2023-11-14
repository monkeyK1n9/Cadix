/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add a rule for handling .ifc files
        config.module.rules.push({
            test: /\.ifc$/,
        use: {
                loader: 'file-loader',
            },
        });

        return config;
    },

}

module.exports = nextConfig

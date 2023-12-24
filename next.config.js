/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/monkeyK1n9/Cadix_Blogs/main/images/**"
            }
        ]
    },
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

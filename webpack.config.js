const path = require("path")

const devConfig = require("./webpack.dev.config.js")
const prodConfig = require("./webpack.prod.config.js")
let baseConfig = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
}

module.exports = (env, argv) => {
    if (env.development) {
        baseConfig = Object.assign(baseConfig, devConfig)
    }
    else if (env.production) {
        baseConfig = Object.assign(baseConfig, prodConfig)
    }
    else {
        throw new Error('No matching configuration was found!');
    }
    return baseConfig;
};
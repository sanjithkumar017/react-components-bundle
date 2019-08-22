const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const packageJson = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        bundle: ['./src/index']
    },
    output: {
        path: __dirname + '/public/dist',
        filename: 'js/[name].js',
        publicPath: '/dist'
    },
    // externals:{
    //     'react':'React',
    //     'react-dom':'ReactDOM'
    // },
    optimization: {
        /* Setting minimizer overrides the defaults provided by webpack, so make sure to also specify the JS minimizer */
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module:{
        rules:[{
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            }, {
                test:/\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    }, 
                    'css-loader', 
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['public/css']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'server',
        //     generateStatsFile: true,
        //     statsOptions: { source: false }
        // }),
        new MiniCssExtractPlugin({
            chunkFilename: "[id].css",
            filename: "css/[name].css"
        })
    ]
}
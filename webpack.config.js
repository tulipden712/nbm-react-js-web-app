const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles/[name]-one.styles.css');
const extractSCSS = new ExtractTextPlugin('styles/[name]-two.styles.css');
const NODE_ENV = process.env.NODE_ENV || "development";
const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');
var LIB_DIR = path.resolve(__dirname, 'public/js');

console.log('BUILD_DIR', BUILD_DIR);
console.log('SRC_DIR', SRC_DIR);
console.log('LIB_DIR', LIB_DIR);

module.exports = (env = {}) => {
    return {
        entry: {
            index: [SRC_DIR + '/index.js'],
            libraries: [SRC_DIR + '/jsModule.js']
        },
        // entry: () => new Promise((resolve) => resolve([
        //     SRC_DIR + '/index.js',
            // './src/library/jquery-migrate.min.js',
            // './src/library/wp-content/themes/tooltipster.bundle.min.js',
            // './src/library/jquery.mousewheel.min.js',
            // './src/library/wp-content/themes/jquery.validate.js',
            // './src/library/wp-content/themes/jquery.fullPage.custom.js',
            // './src/library/wp-content/themes/jquery.lazy.min.js',
            // './src/library/wp-content/themes/selectize.min.js',
            // './src/library/wp-content/themes/jquery.mCustomScrollbar.concat.min.js',
            // './src/library/wp-content/themes/navigation.js',
            // './src/library/wp-content/themes/contact-us-button/script.js',
            // './src/library/wp-content/themes/small-device-popup/script.js',
            // './src/library/wp-includes/imagesloaded.min.js',
            // './src/library/wp-content/themes/scripts.js',
            // './src/library/wp-content/themes/main.min.js',
            // './src/library/wp-content/themes/home/script.min.js',
            // './src/library/wp-content/themes/skip-link-focus-fix.js',
            // './src/library/wp-includes/wp-embed.min.js'
        // ])),
        output: {
            path: BUILD_DIR,
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js'
        },
        //mode: NODE_ENV,
        // watch: true,
        devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: BUILD_DIR,
            port: 9001,
            compress: true,
            hot: true,
            open: true
        },
        resolve: {
            alias: {
                //xyz: 'src/library'
                //xyz$: path.resolve(__dirname, 'src/library/jquery-migrate.min.js')
                //library: path.resolve(__dirname, 'src/library'),
                //'jquery': LIB_DIR + '/jquery.js'
                //'jquery.migrate': LIB_DIR + '/jquery-migrate.min.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['react', 'env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(scss)$/,
                    use: ['css-hot-loader'].concat(extractSCSS.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: { 
                                    alias: { '../img': '../public/img' }
                                    // url: false,
                                    // minimize: true,
                                    // sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    }))
                },
                {
                    test: /\.css$/,
                    //use: extractCSS.extract(['css-loader', 'postcss-loader'])
                    use: extractCSS.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            //loader: 'file-loader',
                            options: {
                                name: './img/[name].[hash].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader',
                    options: {
                        name: './fonts/[name].[hash].[ext]'
                    }
                },
                {
                    test: require.resolve('jquery'),
                    use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }, 
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }]
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            //new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
            new webpack.NamedModulesPlugin(),
            extractCSS,
            extractSCSS,
            new HtmlWebpackPlugin(
                {
                    inject: true,
                    template: './public/index.html',
                    splitChunks: {
                        chunks: "async",
                        minSize: 30000,
                        minChunks: 1,
                        maxAsyncRequests: 5,
                        maxInitialRequests: 3,
                        automaticNameDelimiter: '~',
                        name: true,
                        cacheGroups: {
                            vendors: {
                                test: /[\\/]node_modules[\\/]/,
                                priority: -10
                            },
                            commons: {
                                /* name: "commons",
                                chunks: "initial",
                                minChunks: 2 */
                                /* test: /[\\/]node_modules[\\/]/,
                                name: "vendors",
                                chunks: "all" */
                            }
                        },
                        default: {
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true
                        }
                    }
                },
            ),
            new CopyWebpackPlugin([
                { from: './public/img', to: 'img' }
            ],
                { copyUnmodified: false }
            ),
            // new webpack.ProvidePlugin({
            //     $: 'jquery',
            //     jQuery: 'jquery',
            //     'Typed': 'typep.js'
            // })
        ]
    }
};
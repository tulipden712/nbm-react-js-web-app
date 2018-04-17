const nodeExternals = require('webpack-node-externals'),
    path = require('path'),
    srcPath = path.resolve(__dirname),
    distPath = path.resolve(__dirname, 'build');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles/server.styles.css');
const extractSCSS = new ExtractTextPlugin('styles/[name]-two.styles.css');
// require('babel-register')({
//     presets: ['react']
// });

module.exports = {
    context: distPath,
    entry: srcPath + '/server.js',
    output: {
        path: distPath,
        filename: 'server.js',
        publicPath: '/',
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread'] }
                }],
            },
            /* {
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
            }, */
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader']
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
            //loaders for other file types can go here
        ]
    },
    plugins: [
        /* new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), */
        extractCSS,
        extractSCSS,
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ],
    externals: nodeExternals({
        // load non-javascript files with extensions, presumably via loaders
        whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
    }),
    devtool: 'source-map'
};

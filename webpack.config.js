const path = require('path');
const nodeExternals = require('webpack-node-externals'); 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const libraryName = 'kintone-ui-component';

const jsUMDConfig = {
    entry: __dirname + '/src/legacyJS/js/components/index.js',
    output: {
        path: __dirname + '/dist',
        filename: libraryName + '.min.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: libraryName + '.min.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["transform-class-properties", "transform-react-remove-prop-types"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: [
            'node_modules',
            path.resolve(__dirname, './public')
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

const CommonJSConfig = {
    entry: path.resolve(__dirname, 'src/lib/index.ts'),
    output: {
        path: path.resolve(__dirname, './lib/commonjs'),
        filename: 'index.js',
        library: 'KintoneUIComponent',
        libraryTarget: 'commonjs-module'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/react', "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

const UMDConfig = {
    entry: path.resolve(__dirname, 'src/lib/index.ts'),
    output: {
        path: path.resolve(__dirname, './lib/umd'),
        filename: 'index.js',
        library: 'KintoneUIComponent',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/react', "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

module.exports = [/* CommonJSConfig, UMDConfig,  */jsUMDConfig]
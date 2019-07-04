const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const libraryName = 'kintone-ui-component';

const jsUMDConfig = {
    entry: __dirname + '/src/js/index.ts',
    output: {
        path: __dirname + '/dist/js/',
        filename: libraryName + '.min.js',
        library: 'kintoneUIComponent',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: `(typeof self !== 'undefined' ? self : this)`
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
                test: /\.ts(x*)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-typescript"],
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
        extensions: [".ts", ".js"],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: process.env.NODE_ENV === 'production',
                    ecma: 6,
                    mangle: true
                },
                sourceMap: process.env.NODE_ENV === 'development'
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

const reactUMDConfig = {
    entry: path.resolve(__dirname, 'src/react/index.ts'),
    output: {
        path: __dirname + '/dist/react/',
        filename: libraryName + '.js',
        library: 'kintoneUIComponent',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: '/dist/react/',
        globalObject: `(typeof self !== 'undefined' ? self : this)`
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: libraryName + '.css'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: { 
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map': '',
    externals: {
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }
    },
    module: {
        rules: [
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
    }
}

module.exports = [jsUMDConfig, reactUMDConfig]
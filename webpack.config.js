const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const libraryName = 'kintone-ui-component';

const jsUMDConfig = (_, argv) => {
    return {
        entry: __dirname + '/src/js/index.ts',
        output: {
            path: __dirname + '/dist/',
            filename: libraryName + '.min.js',
            library: 'kintoneUIComponent',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            globalObject: `(typeof self !== 'undefined' ? self : this)`
        },
        target:["web", "es5"],
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
                                publicPath: '../'
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
                () => ({
                    terserOptions: {
                        cache: true,
                        parallel: true,
                        terserOptions: {
                            compress: argv.mode === 'production',
                            ecma: 6,
                            mangle: true
                        },
                        sourceMap: argv.mode === 'development'
                    }
                }),
                new CssMinimizerPlugin({})
            ]
        }
    }
};

const reactUMDConfig = (_, argv) => {
    return {
        entry: path.resolve(__dirname, 'src/react/index.ts'),
        output: {
            path: __dirname + '/dist/react/',
            filename: libraryName + '.min.js',
            library: 'kintoneUIComponent',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            publicPath: '/dist/react/',
            globalObject: `(typeof self !== 'undefined' ? self : this)`
        },
        target:["web", "es5"],
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: libraryName + '.min.css'
            }),
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                'react': path.resolve(__dirname, './node_modules/react'),
                'react-dom': path.resolve(__dirname, './node_modules/react-dom')
            }
        },
        devtool: argv.mode === 'development' ? 'eval-cheap-source-map' : 'source-map',
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
                            },
                        },
                        'css-loader',
                    ],
                }
            ]
        },
        optimization: {
            minimizer: [
                () => ({
                    terserOptions: {
                        cache: true,
                        parallel: true,
                        terserOptions: {
                            compress: argv.mode === 'production',
                            ecma: 6,
                            mangle: true
                        },
                        sourceMap: argv.mode === 'development'
                    }
                }),
                new CssMinimizerPlugin({})
            ]
        }
    }
};

module.exports = [jsUMDConfig, reactUMDConfig]

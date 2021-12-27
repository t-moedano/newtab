## Utilização do webpack no projeto

# Preparar o ambiente
    - executar nvm use versão do node
    - executar o comando:
        npm install
    - Executar o servidor web
    - npm run start

# Configuração inicial do webpack
    - instalar o webpack com os comandos:
        npm install webpack@5.28.0 --save-dev
        npm install webpack-cli@4.5.0 --save-dev
    - criar um arquivo de configuração chamado webpack.config.js
        const path = require('path');
        module.exports = {
            entry: './app/src/js/app.js',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'app/dist'),
            },
        };
    - adicionar o comando no package.json
        "build:dev": "webpack --mode development --config webpack.config.js"


# Instalação de plugins
    => Permite gerar um arquivo html no diretório escolhido
    - html-webpack-plugin@5.3.1 --save-dev
    - adicionar abaixo de output:
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: './app/src/app.html',
                    filename: 'app.html',
                    hash: true, //gera um hash para atualizar as versões do bundle
                }
            ),
        ],

    => Permite copiar arquivos css para a pasta dist
    - copy-webpack-plugin@8.1.0 --save-dev
    - adicionar abaixo do HtmlWebpackPlugin
        new CopyWebpackPlugin({
            patterns: [
                { from: './app/src/css', to: 'css' },
            ],
        }),

# Trabalhando com módulos e dependencias de css
    => Para ter uma dependencia de css externa e atualizada
    - bootstrap@4.6.0 --save
    - Remover as referencias de css do app.html 
    - Remover a pasta css de src/css
    - remover as linhas de código
        new CopyWebpackPlugin({
            patterns: [
                { from: './app/src/css', to: 'css' },
            ],
        }),
    - importar o bootstrap no arquivo app.js
        import './bootstrap/dist/css/bootstrap.css';
    - instalar os pacotes necessários para configuração
        npm install css-loader@5.2.0 --save-dev
        npm install style-loader@2.0.0 --save-dev
    - Adicione as seguintes linhas abaixo de output:
        module: {
            rules: [
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            ],
        },
    
    => Vamos mantar um bundle.js e um bundle.css para otimizar o carregamento e renderização do css
    - instalar o plugin:
        npm install mini-css-extract-plugin@1.4.0 --save-dev
    - modificar o arquivo webpack.config.js 
        importar: 
            const MiniCssExtractPlugin = require('mini-css-extract-plugin');
        Em plugin adiciona a declaração da classe
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        Em Modules > rules modifica a regra para:
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        

# Build para produção
    - adicionar o comando para produção no package.json
        "build:prod": "webpack --mode production --config webpack.config.js"  
    - precisamos minificar o bundle final
        instalar um plugin css ára minificar o bundle css
            npm install css-minimizer-webpack-plugin@1.3.0 --save-dev
        importar no arquivo webpack.config.js
            const CssMinimizeWebpackPlugin = require('css-minimize-webpack-plugin');
        adicione as linhas abaixo de module
            optimization: {
                minimizer: true,
                minimizer: [
                    new CssMinimizeWebpackPlugin(),
                    '...',
                ]
            },
        para concatetar de uma forma mais robusta precisamos importar um modulo do próprio webpack
            const webpack = require('webpack');
            em plugin adicione:
                new webpack.ModuleConcatenationPlugin(),
        executa: npm run build:prod

# webpack dev server
    => Servidor de desenvolvimento para webpack 
    - instalar as dependencias 
        npm install webpack-dev-server@3.11.2 --save-dev
    - modificar o arquivo package.json incluindo os seguintes comandos em scripts
        "start:dev": "webpack serve --mode development --config webpack.config.js",
        "start:prod": "webpack serve --mode production --config webpack.config.js",
    - incluir as configurações necessárias para o webpack.config.js no final do arquivo
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            port:  3000,
        },
    - remover o arquivo src/index.html
    - remonear o arquivo src/app.html para src/index.html
    - alterar o arquivo webpack.config.js para reconhecer o novo arquivo
        new HtmlWebpackPlugin(
            {
                template: './app/src/index.html',
                filename: 'index.html',
                hash: true, 
            }
        ),
    


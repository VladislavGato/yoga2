'use strict';
// переменная чтобы правильно отработал наш webpack.  это путь к нашим файлам
let path = require('path');

// экспортируем большой объект с настройками для webpack
module.exports = {
  // режим сборки development или production
  mode: 'development',
  // точка входа. откуда webpack будет начинать работу
  // файл с зависимостями require и import из нового стандарта
  entry: './src/js/script.js',
  // файл выхода.
  output: {
    // этот файл создаем
    filename: 'bundle.js',
    // путь к конечному файлу
    path: __dirname + '/dist/js'
  },
  // отслеживает все изменения файла если true 
  watch: true,

  // информация/карта об изходниках и месторасположени файла
  devtool: "source-map"

  // можем подключить модули
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader?optional[]=runtime',
  //         options: {
  //           presets: [
  //             ["@babel/env", {
  //               targets: {
  //                 edge: "17",
  //                 firefox: "60",
  //                 chrome: "67",
  //                 safari: "11.1",
  //                 ie: "11"
  //               }
  //             }]
  //           ]
  //         }
  //       }
  //     }
  //   ]
  // },

  // можем поключить плагины
  // plugins: [

  // ]
};
'use strict';
// переменная чтобы правильно отработал наш webpack.  это путь к нашим файлам
let path = require('path');

// экспортируем большой объект с настройками для webpack
module.exports = {
  // режим сборки development или production
  mode: 'development',
  // точка входа. откуда webpack будет начинать работу
  // файл с зависимостями require и import из нового стандарта
  entry: './src/js/index.js',
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

  // },

  // можем поключить плагины
  // plugins: [

  // ]
};
# Module02-Shop
### Инициализируем проект
Инициализируем проект. следующей командой:
```
npm init -y
``` 
Генерируется package.json.<br>
Прибираемся в этом файле, удаляем лишнее.<br>
Устанавливаем webpack<br>
```
npm install --save-dev webpack webpack-cli
```
Далее будем настраивать webpack.config.js<br>
Переходим на сайт [webpack](https://webpack.js.org/)<br>
Копируем заготовку:
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```
В наш файл package.json добавляем<br>
```
"scripts": {
    "build": "webpack"
},
```
"buid - название скрипта<br>
"webpack" - название команды<br>
Поскольку в файле webpack.config.js у нас сейчас прописаны следующие строки:<br>
```
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
}
```
Это означает, что если мы выполним команду `npm run build`, то webpack сгенерирует папку "dist" с файлом "bundle.js".
>'mode' option has not been set
Означает, что не установлен режим разработки.
### HTML
Теперь мы работаем с webpack, и не можем просто взять и создать index.html - webpack (без плагинов) это не оценит. Поэтому устанавливаем плагин для HTML.
```
npm i html-webpack-plugin
```
Если все успешно устанавливается, то видим новую зависимость в файле package.json
```
"dependencies": {
    "html-webpack-plugin": "^5.5.0"
}
```
Теперь добавить работу этого плагина в планировщик webpack.<br>
Добавляем в webpack.config.js:
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    ...........  ,
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
```
Создаем файл './src/index.html'.<br>
Теперь можно удалить папку dis (если она есть) и проверить работу сборки, выполнив команду `npm run build`
### Images
Подключим в планировщик сжатие картинок.<br>
Как это сделать написано [здесь](https://webpack.js.org/guides/asset-modules/#resource-assets).<br>
Указываем все расширения файлов изображений, которые будут использоваться:
```
module.exports = {
    ...............
    output: {
        ...............
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    ............... ,
    module: {
        rules: [
            {
                test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ]
    }
};
```
Устанавливаем **loader**, чтобы html читал наши картинки
```
npm install --save-dev html-loader
```
Чтобы dist автоматически удалялась при новом билде (т.е. чтобы не удалять эту папку каждый раз вручную), нужно прописать `clean: true`
```
module.exports = {
    ..............
    output: {
        .................
        clean: true,
```
Что будет делать html-loader? В минимизированный html файл он будет подставлять измененное название картинки, а именно ее хэш.
### SCSS





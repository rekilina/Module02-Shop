# Как настроить webpack для верстки сайта

> At its core, webpack is a static module bundler for modern JavaScript applications.

- [Initialize project](#инициализируем-проект)
- [Images](#images)
- [HTML](#html)
- [SCSS](#scss)
- [Modes](#режимы-сборки)

## Инициализируем проект
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
## HTML
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
## Images
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
## SCSS
Для автоматического преобразования SCSS в CSS установим сразу несколько пакетов
```
npm install -D sass-loader sass css-loader style-loader
```
Добавляем в `rules`:
```
{
    test: /\.css$/i,
    use: [
        'style-loader', 'css-loader'
    ]
},
{
    test: /\.scss$/i,
    use: [
        'style-loader', 'css-loader', 'sass-loader'
    ]
}
```
Что-то уже есть, но пока что ничего не готово. На данный момент, если выполнить `npm run build`, то все css файлы буду автоматически преобразовываться в js, а именно в bundle.js, это будет негативно сказываться на скорости работы сайта.<br>
Чтобы scss преобразовывался в css, нужно подключить плагин `mini-css-extract-plugin`:
```
npm install mini-css-extract-plugin --save-dev
```
Подключаем плагин в планироващик:
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
..............
plugins: [
    ..............
    new MiniCssExtractPlugin({
        filename: './styles/main.css'
    })
],
..............
{
    test: /\.css$/i,
    use: [
        MiniCssExtractPlugin.loader, 'css-loader'
    ]
},
{
    test: /\.scss$/i,
    use: [
        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
    ]
}
```
В файле index.js:
```
import './styles/main.scss'
```
Отметим, что в файле index.js мы указываем путь относительно корневого каталога проекта, а в webpack.config.js - относительно папки dist. Таким образом, в index.js указано, что мы преобразуем, а в webpack.config.js - *во* что преобразуем и куда записываем результат.

### Режимы сборки
Режимы сборки (mode) - это development и production.
Чтобы установить режим сборки, нам, во-первых, нужно сделать функцию-обертку в module.exports:
```
module.exports = ({develop}) => ({
    mode: develop ? 'development' : 'production',
    ...............
})
```
В файле package.json:
```
"scripts": {
    "build": "webpack",
    "dev": "webpack --env develop"
}
```
Далее - создаем сервер. В файле webpack.config.js:
```
const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true, // при запуске сервера открывается браузер
        hot: true, // страница автоматически обновляется при внесении изменений
        port: 8080,
    }
};
module.exports = ({develop}) => ({
    .............. ,
    ...devServer(develop),
});
```
В файле package.json 
```
"dev": "webpack serve --env develop"
```
И скачиваем пакет, который отвечает за сервер
```
npm install -D webpack-dev-server
```
Теперь выполняем в терминале команду 
```
npm run dev
```
Чтобы решить проблему с картинками, можно трансформировать их в base64:<br>
1. `type: 'asset/resource'` --> `'asset/inline'`
2. убираем (комментируем) строку `assetModuleFilename: 'images/[hash][ext][query]',`
Удаляем папку dist и пересобираем проект (`npm run build`)<br>
<br>
To load npm modules: 
```
npm -i
```





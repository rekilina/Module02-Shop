# Module02-Shop
### Инициализируем проект
`npm init -y` - инициализируем проект. Генерируется package.json.<br>
Прибираемся в этом файле, удаляем лишнее.<br>
Устанавливаем webpack<br>
`npm install --save-dev webpack webpack-cli`
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
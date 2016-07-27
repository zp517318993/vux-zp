var fs = require('fs')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var entries = {},
    devPlugins = [],
    buildPlugins = [],
    pages = [];

var dirs = fs.readdirSync(config.src.viewPath);

dirs.forEach(dir => {

    var files = fs.readdirSync(config.src.viewPath + '/' + dir);

    files.forEach(filename => {
        if (filename.indexOf('.html') > -1) {
            modulename = filename.replace(/.\w+$/, '');
            // 入口文件对象
              entries[dir + '/' + modulename] = './src/js/' + dir + '/' + modulename + '.js';
            // 调试环境，生成文件
            devPlugins.push(new HtmlWebpackPlugin({
                filename: dir + '/' + filename,
                template: 'src/view/' + dir + '/' + filename,
                chunks: [dir + '/' + modulename],
                inject: 'body'
            }));
            // 发布时，生成文件
            buildPlugins.push(new HtmlWebpackPlugin({
                filename: 'Views/' + dir + '/' + modulename+'.html',
                namespace:'HXG_Demo.Models',
                template: 'src/view/' + dir + '/' + filename,
                chunks: [dir + '/' + modulename, 'manifest', 'vendor'],
                inject: 'body'
            }));
            // config.dev.proxyTable['/' + dir + '/' + modulename] = '/' + dir + '/' + filename;
            pages.push({ url: '/' + dir + '/' + modulename, file: '/'+dir + '/' + filename });
        }
    })
})

module.exports = {
    entries: entries,
    devPlugins: devPlugins,
    buildPlugins: buildPlugins,
    pages: pages
}

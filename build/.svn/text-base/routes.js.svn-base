'use strict';
var path = require('path')
var fs = require('fs')
var express = require('express')
var api = require('./API')
//var html = require('./htmlPlugins')

function get(app, item) {
    app.get(item.url, getdata);
    app.get(item.url + "/*", getdata);

    function getdata(req, res) {
        let query = req.query || {};
        console.log(query);
        var data = fs.readFileSync(path.resolve(__dirname, item.file), { encoding: 'utf-8' })
        res.writeHead(200, { "Content-Type": "application/json" });
        
//      var result = {"Status": 1,
//          "ErrMessage": "",
//          "Data": JSON.parse(data)
//      };

        var result = JSON.parse(data);

        res.write(JSON.stringify(result));
        res.end();
    }
}

function post(app, item) {
    app.post(item.url, function(req, res) {
        let query = this.query || {};
        console.log(query);
        var data = fs.readFileSync(path.resolve(__dirname, item.file),{encoding:'utf-8'})
        res.writeHead(200, { "Content-Type": "application/json" });
        //res.write({ Status: 1, ErrMessage: '' });
        
        var result = JSON.parse(data);

        res.write(JSON.stringify(result));
        res.end();
    });
}

function redirect(app, item) {
    app.get(item.url, function(req, res) {
        res.redirect(item.file);
    });
}

module.exports = function(app) {
    for (var item in api) {
        if (api[item].type === 'get') {
            get(app, api[item]);

        } else if (api[item].type === 'post') {
            post(app, api[item]);
        }
    }
    // console.log(html.pages)

    //for (var page in html.pages) {
        // console.log(html.pages[page])
        //redirect(app, html.pages[page]);
    //}
}

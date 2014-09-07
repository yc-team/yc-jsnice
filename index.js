'use strict';

//core
var fs = require('fs');

//thire-part
var request = require('request');

//TODO we will support more beautify server urls
var URLS =  require('./lib/urls.json'); 

module.exports = function(data){

    //support http url and local single file
    var data = data || '';

    //TODO options
    var options = {
        method: 'POST',
        json: true,
        encoding: 'utf-8',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest'
        },
        url: URLS['jsnice'] + '?pretty=1&rename=1&types=1&suggest=0',
        body: data
    };


    request(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            console.log(body.js);
        }
    });


};
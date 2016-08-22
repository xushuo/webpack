/**
 * Created by shuo on 2016/8/22.
 */
require("./main.css");

var $ = require('jquery');

$(document).ready(function(){
    var app = document.createElement('div');
    app.innerHTML = '<h1>HELLO MOBILE</h1>';
    document.body.appendChild(app);
    $('h1').greenify();
});
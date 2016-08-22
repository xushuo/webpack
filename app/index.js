/**
 * Created by shuo on 2016/8/18.
 */
require("./main.css");
var $ = require('jquery');
var moment = require('moment');
var sub = require("./sub");

var app = document.createElement('div');
app.innerHTML = '<h1>Hello world to for us</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p>look at me ! now is '+ moment().format() +'</p>');
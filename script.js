var jumbotron = document.getElementById('jumbotron')
var display = document.getElementById('display')
var lead = document.getElementById('lead')
var currentDay = document.getElementById('currentDay')

moment().format("MMM Do YY"); 
moment().format('ll');
var { DateTime } = require('luxon');
DateTime.local();

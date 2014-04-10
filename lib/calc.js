
//var util = require('util');

var cal = module.exports = {};

function checkNumbers(a,b){
}

cal.add = function(a,b){
   checkNumbers(a,b);
   return a + b;
}

cal.sub = function(a,b){
   checkNumbers(a,b);
   return a - b;
}

cal.multi = function(a,b){
   checkNumbers(a,b);
   return a * b;
}

cal.div = function(a,b){
   checkNumbers(a,b);
   return a / b;
}


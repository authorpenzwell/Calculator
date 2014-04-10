

var cal = require('../lib/calc');
var chai = require('chai');
var expect = require('chai').expect;
//var should = require('should');

it ('add test', function(){
   var res = cal.add(3,4);
   expect(res).to.equal(7);
});

it ('sub test', function(){
   var res = cal.sub(2,1);
   expect(res).to.equal(1);
});

it ('multi test', function(){
   var res = cal.multi(2,5);
   expect(res).to.equal(10);
});

it ('div test', function(){
   var res = cal.div(10,5);
   expect(res).to.equal(2);
});


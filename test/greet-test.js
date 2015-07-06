var greet = require('../greet');
var expect = require('chai').expect;

describe('greet.js', function() {
  it('will say "Hello, Farhad." when passed Farhad', function() {
    expect(greet.hello('Farhad')).to.eql(('Hello, Farhad.'))
  });
})

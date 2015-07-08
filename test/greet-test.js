var greet = require('../greet');
var expect = require('chai').expect;

describe('greet.js', function() {
  it('will say "Hello, Farhad." when passed Farhad', function() {
    expect(greet.hello('Farhad')).to.eql('Hello, Farhad.');
  });

  it('will say "Goodbye, Farhad." when passed Farhad', function() {
    expect(greet.goodbye('Farhad')).to.eql('Goodbye, Farhad.');
  });
});

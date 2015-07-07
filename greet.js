exports.hello = function(name) {
  return('Hello, ' + name + '.');
};

exports.goodbye = function(name) {
  return('Goodbye, ' + name + '.')
}

name = process.argv[2];  /*Dewey Luu helped me figure this out by directing me to:
http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js */
console.log(exports.hello(name));
console.log(exports.goodbye(name));

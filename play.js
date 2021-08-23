const { connect } = require('./client.js');

connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(cb) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  cb();
  return stdin;
}

const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
    process.exit();
    }
  });  
}

setupInput(handleUserInput);



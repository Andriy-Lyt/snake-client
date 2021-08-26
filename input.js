const  { KEY_MAP }  = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput );
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = function(key) {
  //disconnect
  if (KEY_MAP[key] == process.exit) {
    connection.write(KEY_MAP[key]+'()');
  }

  //set direction of the move
  if (KEY_MAP[key]) {
    connection.write(KEY_MAP[key]);
  }
}

module.exports = {
  setupInput
}

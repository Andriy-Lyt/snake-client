const  { KEY_MAP, IP }  = require('./constants');
// console.log( KEY_MAP );

let connection;

const setupInput = function(conn) {
  connection = conn;
  // console.log(conn);
  const stdin = process.stdin;
  stdin.on('data', handleUserInput );
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = function(key) {
  // console.log("key: ", key);

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
// console.log(module);

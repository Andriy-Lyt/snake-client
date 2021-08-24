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

  //set direction of the move
  if (KEY_MAP[key]) {
    connection.write(KEY_MAP[key]);
  }

/*   below is not a "dead code" but the thinking process exploring solution options, and my notes
if (key === KEY_MAP.MOVE_UP) { // w
    // console.log('w, Move: up'); 
    connection.write('Move: up');
  }

  if (key === '\u0061') { // a
    // console.log('a, Move: left'); 
    connection.write('Move: left');
  }
 */
}

module.exports = {
  setupInput
}
// console.log(module);

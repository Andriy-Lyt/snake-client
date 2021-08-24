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

  if (key === '\u0003') { //ctrl c
    process.exit();
  }
  if (key === '\u0077') { // w
    // console.log('w, Move: up'); 
    connection.write('Move: up');
  }
  if (key === '\u0061') { // a
    // console.log('a, Move: left'); 
    connection.write('Move: left');
  }
  if (key === '\u0073') { // s
    // console.log('s, Move: down'); 
    connection.write('Move: down');
  }
  if (key === '\u0064') { // d
    // console.log('d, Move: right'); 
    connection.write('Move: right');
  }

}

module.exports = {
  setupInput
}

const net = require("net");
const { IP, PORT } = require('./constants');
// console.log(IP, PORT);

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Connected to server.');
    conn.write('Name: SNK');
    const intId = setInterval(()=>{
      // conn.write('Move: up');
      // conn.write('Move: down');
      // conn.write('Move: right'); //Does not work, why?
      // conn.write('Move: left');
    }, 100);

    setTimeout(()=>{
      clearInterval(intId);
    },5000)

  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });  
  conn.on('end', () => {
    console.log('Server disconnected');
  });

  return conn;
};


module.exports = {
  connect
}
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 3000// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to server");
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });  
  conn.on('end', () => {
    console.log('Server disconnected');
  });

  console.log("Connecting ...");

  return conn;
};


module.exports = {
  connect
}
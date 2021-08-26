const net = require("net");
const { IP, PORT, PLAYER_NAME } = require('./constants');

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
    conn.write(`Name: ${PLAYER_NAME}`);

      //Test sending command:
      const intId = setInterval(() => {
        // conn.write('Move: up');
      }, 100);
      setTimeout(() => {
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
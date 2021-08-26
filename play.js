const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log("Connecting ...");

const conObj =  connect();

const playerName = process.argv[2];  // console.log(playerName+" in play.js");

 setupInput(conObj);

 module.exports = {
  conObj, playerName
 }


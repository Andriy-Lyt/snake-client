const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log("Connecting ...");

//??
const conObj =  connect();

 setupInput(conObj);



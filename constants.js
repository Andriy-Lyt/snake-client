const IP = 'localhost';
const PORT = 3000;

const KEY_MAP = {
    //stop the game
    '\u0003': process.exit,  //ctrl c

    //set direction of the move
    '\u0077': 'Move: up',   //w
    '\u0073': 'Move: down',  // s
    '\u0061': 'Move: left',  // a
    '\u0064': 'Move: right', // d

    //send text messages
    '\u007A': 'Say: You Rock!', // z
    '\u0078': "Say: Rock'n'Roll!" // x
}

module.exports = {
  IP, PORT, KEY_MAP
}

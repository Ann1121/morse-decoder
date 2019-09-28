const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let length = expr.length;
    let morseString = '';
    let string = '';
    let l = length / 10
    for (var i = 0; i < l; i++) {
      if (expr[i*10] == '*') {
        string += ' ';
        continue;
      }
      for (let j = 0; j < 10; j+= 2) {
        if (expr[i*10+j] == '1') {
          if (expr[i*10+j+1] == '1') {
            morseString += '-';
          }
          else if (expr[i*10+j+1] == '0') {
            morseString += '.';
          }
        }
      }
      string += MORSE_TABLE[morseString];
      morseString = '';
    }
    return string;
}




module.exports = {
    decode
}

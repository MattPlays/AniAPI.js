const PrettyError = require("pretty-error");
const pe = new PrettyError();

pe.start();

pe.appendStyle({
    'pretty-error > header > title > kind': {
        display: 'none'
    },

    'pretty-error > header > colon': {
        display: 'none'
    },

    'pretty-error > header > message': {
        color: 'bright-white',

        background: 'cyan',

        padding: '0 0'
    },

    'pretty-error > trace > item': {
        marginLeft: 2,

        bullet: '"<grey>o</grey>"'
    },

    'pretty-error > trace > item > header > pointer > file': {
        color: 'bright-cyan'
     },
  
     'pretty-error > trace > item > header > pointer > colon': {
        color: 'cyan'
     },
  
     'pretty-error > trace > item > header > pointer > line': {
        color: 'bright-cyan'
     },
  
     'pretty-error > trace > item > header > what': {
        color: 'bright-white'
     },
  
     'pretty-error > trace > item > footer > addr': {
        display: 'none'
     }
})
module.exports = pe;
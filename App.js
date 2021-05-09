var morse = require('./codes.json'),
_ = require('lodash');
module.exports.encode = msg => msg.toUpperCase().replace(/[^\w\s]| /gi, '').split('').map(e => morse[e] || '').join(' ')
module.exports.decode = msg => msg.split('   ').map(a => a.split(' ').map(b => _.invert(morse)[b]).join('')).join(' ');

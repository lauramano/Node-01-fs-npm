'use strict';
//  es6 module syntax (neveikia)
// import { valandosMinutes} from './helper';

// comandjs dirba su ImporrtExport
const {valandosToMinutes, metaiToDienos} = require('./modules/helper');
// sum defoltinis eksportas
const sum = require('./modules/sum');
console.log('app.js');

const name = 'Mike';
const fullName = `${name}  Bond`;
console.log(fullName);


console.log(valandosToMinutes(12));
console.log(metaiToDienos(70));
console.log(sum(70, 39));

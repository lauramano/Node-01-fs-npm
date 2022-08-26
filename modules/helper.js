'use strict';
// export function valandosToMinutes(valandos)  Es6 export
function valandosToMinutes(valandos){
    return valandos * 60;
}

function metaiToDienos(metai){
 return metai * 365;
}

const n1 = valandosToMinutes(10);
console.log('is valandu i minutes', n1);

module.exports = {
    valandosToMinutes, metaiToDienos,
};
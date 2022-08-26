'use strict';
// failu sistmos modulis (tokia sistema, sintakse)
const fs = require('fs');

//  irasyti i failu sistema
// fs.writeFile('./user.txt', 'Username=James', () => {});
function irasyt(){
fs.writeFile('./user.txt', 'Username=James\n age=25\n Miestas=Kaunas', (err) => {
    if (err) {
        // ivyko klaida
        console.log(err.stack);
        return;
    }
    console.log('failas sukurtas ir duomenys irasyti sekmingai');
});
}
function skaitom(path) {
fs.readFile(path, (err, data) => {
    if (err) {
        // ivyko klaida
        console.log(err);
        return;
    }
    // klaidos nera
    console.log(('data', data.toString()));
    const rows = data.toString().split('\n');
    console.log(rows);
});
}
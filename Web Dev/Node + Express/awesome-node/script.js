const fs = require('fs');

fs.readFile('./awesome.txt', (err, data) => {
    console.time('fun')
    if (err) {
        console.log('error');
    }
    console.log('Async', data.toString('utf8'));
    console.timeEnd('fun');
})

const file = fs.readFileSync('./awesome.txt');
console.log('Sync', file.toString('utf8'));

// APPEND
// fs.appendFile('./awesome.txt', ' I am so awesome!', err => {
//     if(err) {
//         console.log(err);
//     }
// })

// WRITE
// fs.writeFile('bmf.txt', 'Bad Mother Fucker', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// DELETE
// fs.unlink('./bmf.txt', err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Deleted!')
// })
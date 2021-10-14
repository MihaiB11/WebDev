const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/:id', (req, res) => {
    // console.log(req.query);
    // req.body
    // console.log(req.headers);
    console.log(req.params);
    res.status(404).send('Not found')
});

// app.get('/profile', (req, res) => {
//     res.send('Getting profile')
// });

// app.post('/profile', (req, res) => {
//     console.log(req.body)
//     res.send('Success!')
// });

app.listen(3000);


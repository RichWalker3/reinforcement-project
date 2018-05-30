const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

<<<<<<< HEAD
app.use(express.static('assets'));
=======
app.use(express.static('public'));
>>>>>>> 1ec778a88fce2c048079a3427d79dfe6177e9c4c

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/video', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, './assets', 'big_buck_bunny_720p_surround.mp4'))
})

app.listen(1337, () => {
=======
    res.sendFile(path.join(__dirname, './public', 'big_buck_bunny_720p_surround.mp4'))
})

app.listen(1337, () =>{
>>>>>>> 1ec778a88fce2c048079a3427d79dfe6177e9c4c
    console.log('Listening on port 1337.')
})
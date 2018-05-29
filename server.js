const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, './assets', 'big_buck_bunny_720p_surround.mp4'))
})

app.listen(1337, () => {
    console.log('Listening on port 1337.')
})
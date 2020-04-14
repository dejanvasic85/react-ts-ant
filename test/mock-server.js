const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

const { port, publicPath } = require('../webpack/env');

const app = express();
app.use(compression());

const publicRoot = path.join(__dirname, '../public');

app.use(publicPath, express.static(publicRoot));

app.get('*', (req, res) => {
  fs.readFile(`${publicRoot}/index.html`, (_, data) => {
    res.send(data.toString());
  });
});

app.listen(port, () => console.log(`Mock S3 server running on ${port}`));

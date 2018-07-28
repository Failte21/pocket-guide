const express = require('express');
const tours = require('./routes/tours');
const pois = require('./routes/pois');
const app = express();

app.use('/tours', tours);
app.use('/pois', pois);

app.listen(3001, () => console.log('Example app listening on port 3001!'));
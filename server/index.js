const express = require('express');
const tours = require('./routes/tours');
const pois = require('./routes/pois');
const app = express();

app.use('/imgs', express.static('medias'));

app.use('/tours', tours);
app.use('/pois', pois);

app.listen(3001, () => console.log('Pocket guide API listening on port 3001!'));
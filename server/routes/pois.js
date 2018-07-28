const express = require('express');
const router = express.Router();
const poisController = require('../controllers/pois');

router.get('/:poi_id', poisController.retrievePoi);

module.exports = router;
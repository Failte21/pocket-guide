const express = require('express');
const router = express.Router();
const toursController = require('../controllers/tours');

router.get('/:tour_id', toursController.retrieveAndFormatTour);

module.exports = router;
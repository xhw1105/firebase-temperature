const express = require('express');
const {getTemperatures, createTemperatures, deleteTemperatures} = require('../controllers/temperatures')
const router = express.Router();

router.route('/').get(getTemperatures).post(createTemperatures);

router.route('/:id').delete(deleteTemperatures);

module.exports = router;
const express = require('express');
const {getCandidate} = require('../controllers/getCandidate.js');

const router = express.Router();

router.get('/candidate',getCandidate);

module.exports = router;
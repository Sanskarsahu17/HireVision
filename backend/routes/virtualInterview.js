const express = require('express');
const {getScoreInterview,getQuestions} = require('../controllers/interviewSimulation');

const router = express.Router();

router.post('/getQuestions',getQuestions);
router.post('/getScoreInterview',getScoreInterview);

module.exports = router;
const express = require('express');

const { verifyTokenByAdmin, verifyToken } = require('../middleware/verifyToken');
const { getAllFeedback, createFeedback } = require('../controller/feedback.controller');

const router = express.Router();

router.post('/api/feedback/create', verifyToken, createFeedback);

// ADMIN
router.get('/api/feedback/list', verifyTokenByAdmin, getAllFeedback);

module.exports = router;

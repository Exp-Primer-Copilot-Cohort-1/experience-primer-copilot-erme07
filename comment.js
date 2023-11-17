// Create web server by using Express
// Date: 2021/05/24
// Creator: Nhat Hoang

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', commentController.getComments);

router.post('/', authMiddleware, commentController.createComment);

router.put('/', authMiddleware, commentController.updateComment);

router.delete('/', authMiddleware, commentController.deleteComment);

module.exports = router;
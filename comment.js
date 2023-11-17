// Create web server using express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middlewares/auth');

// Create comment
router.post('/', auth, commentController.create);

// Get all comments
router.get('/', commentController.findAll);

// Get comment by id
router.get('/:id', commentController.findById);

// Update comment by id
router.put('/:id', auth, commentController.update);

// Delete comment by id
router.delete('/:id', auth, commentController.delete);

module.exports = router;

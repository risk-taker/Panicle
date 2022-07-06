const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const auth = require('./middlewares/auth');

router.post('/signup', authController.register);
router.post('/login', authController.login);
router.get('/logout', auth, authController.logout);
module.exports = router;
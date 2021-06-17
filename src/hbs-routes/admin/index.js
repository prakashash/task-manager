const express = require('express');
const router = express.Router();
const controller = require('./admin.controller');
const auth = require('../../middleware/auth')

router.get('/', controller.LoginAdmin);
router.get('/reg', controller.RegAdmin);
router.get('/reset',auth, controller.resetAdmin);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.getUser);
router.post('/', controller.saveUser);
router.put('/', controller.updateUser);
router.delete('/', controller.deleteUser);

module.exports = router;

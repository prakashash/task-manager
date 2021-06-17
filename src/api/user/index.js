const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const auth = require('../../middleware/auth')

router.get('/', auth, controller.getUser);
router.post('/', controller.saveUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;

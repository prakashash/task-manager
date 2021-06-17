const express = require('express');
const router = express.Router();
const controller = require('./task.controller');
const auth = require ('../../middleware/auth')

router.get('/',auth, controller.getTask);
router.get('/:id', controller.getTaskById);
router.post('/', controller.saveTask);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;

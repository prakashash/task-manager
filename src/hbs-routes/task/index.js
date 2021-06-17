const express = require('express');
const router = express.Router();
const controller = require('./task.controller');
const auth = require ("../../middleware/auth")

router.get('/',auth, controller.getTask);
router.get('/add',auth, controller.addTask);
router.get('/edit/:id',auth, controller.editTask);


module.exports = router;
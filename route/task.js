const express = require('express');
const { createTaskController, getAllTask, handleDeleteTask, handleUpdateStatus,} = require('../controller/task');
const router = express.Router();



router.post('/create-task', createTaskController)
router.get('/all-task', getAllTask);
router.delete('/task/:id', handleDeleteTask);
router.put('/task/:id', handleUpdateStatus);


module.exports = router
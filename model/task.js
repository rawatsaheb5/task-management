const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // Define your schema properties here
  title: { type: String, required: true, },
  description: { type: String, required: true },
  status: { type: String, enum: ['TODO', 'IN_PROGRESS', 'COMPLETED'], default: 'TODO' },
  // Other properties...
}, {
    timestamps:true,
});

const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;

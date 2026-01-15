const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    todoItem: { type: String, required: true, trim: true },
    createDate: { type: Date, default: Date.now },
    priority: { type: Number, enum: [0, 1, 2, 3], default: 0 },
    status: { type: Number, enum: [0, 1, 2, 3], default: 0 },
    isNew: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);


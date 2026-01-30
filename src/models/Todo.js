/**
 * Todo Model
 * Defines the schema and structure for todo items in MongoDB
 * 
 * Fields:
 * - todoItem: The task description (required)
 * - createDate: Timestamp of when the todo was created (default: current time)
 * - priority: Priority level (0=none, 1=low, 2=medium, 3=high)
 * - status: Task status (0=none, 1=pending, 2=in-progress, 3=completed)
 * - isNew: Flag to indicate if task is newly created
 * - user: Reference to the User who owns this todo
 * - timestamps: Auto-managed createdAt and updatedAt fields
 */
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
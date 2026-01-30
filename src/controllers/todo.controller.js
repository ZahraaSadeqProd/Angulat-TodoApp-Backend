const Todo = require('../models/Todo');

/**
 * Create Todo Controller - Creates a new todo item
 * - Adds current authenticated user ID to the todo
 * - Returns the created todo with MongoDB ID
 * @param {Object} req - Express request object with todo data in body
 * @param {Object} res - Express response object
 */
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create todo' });
  }
};

/**
 * Get Todos Controller - Retrieves all todos for current user
 * - Filters todos by authenticated user ID
 * - Sorts by most recently created
 * - Returns array of todos
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort(
      '-createdAt'
    );
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};

/**
 * Update Todo Controller - Updates an existing todo item
 * - Verifies todo belongs to authenticated user
 * - Updates specified fields with new values
 * - Returns updated todo
 * @param {Object} req - Express request object with todo ID in params and updates in body
 * @param {Object} res - Express response object
 */
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update todo' });
  }
};

/**
 * Delete Todo Controller - Deletes a todo item
 * - Verifies todo belongs to authenticated user
 * - Removes todo from database
 * - Returns success message
 * @param {Object} req - Express request object with todo ID in params
 * @param {Object} res - Express response object
 */
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete todo' });
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
};
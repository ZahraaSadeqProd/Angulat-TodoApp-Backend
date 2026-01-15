const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const demoGuard = require('../middleware/demoGuard.middleware');
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

const router = express.Router();

router.post('/', authMiddleware, demoGuard, createTodo);
router.get('/', authMiddleware, demoGuard, getTodos);
router.put('/:id', authMiddleware, demoGuard, updateTodo);
router.delete('/:id', authMiddleware, demoGuard, deleteTodo);

module.exports = router;
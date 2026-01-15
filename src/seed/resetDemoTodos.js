const User = require('../models/User');
const Todo = require('../models/Todo');

const resetDemoTodos = async () => {
  const demoUser = await User.findOne({ isDemo: true });

  if (!demoUser) return;

  await Todo.deleteMany({ user: demoUser._id });
  console.log('Demo todos reset');
};

module.exports = resetDemoTodos;

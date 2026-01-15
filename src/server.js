require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');
const seedDemoUser = require('./seed/demoUser');
const resetDemoTodos = require('./seed/resetDemoTodos');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  // Only seed in development
  if (process.env.NODE_ENV !== 'production') {
    await seedDemoUser();
    await resetDemoTodos();
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
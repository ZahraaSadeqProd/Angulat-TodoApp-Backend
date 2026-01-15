const bcrypt = require('bcryptjs');
const User = require('../models/User');

const seedDemoUser = async () => {
  const existingDemo = await User.findOne({ isDemo: true });

  if (existingDemo) {
    console.log('Demo user already exists');
    return;
  }

  const hashedPassword = await bcrypt.hash('demo1234', 10);

  await User.create({
    email: 'demo@todoapp.com',
    password: hashedPassword,
    role: 'demo',
    isDemo: true
  });

  console.log('Demo user created');
};

module.exports = seedDemoUser;

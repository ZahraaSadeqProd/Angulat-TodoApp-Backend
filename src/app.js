const express = require('express');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.use('/todos', todoRoutes);


module.exports = app;

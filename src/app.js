const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');

/**
 * Security middleware configuration
 * Applies Helmet CSP (Content Security Policy) to prevent various attacks
 * - Restricts resource loading to trusted sources
 * - Allows Google Fonts for styling
 * - Restricts script execution to same-origin only
 */
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:']
    }
  })
);

// Middleware for cross-origin and JSON parsing
app.use(cors());
app.use(express.json());

// API Routes
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

/**
 * Health check endpoint
 * Used for monitoring server availability
 */
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = app;
/**
 * User Model
 * Defines the schema and structure for user accounts in MongoDB
 * 
 * Fields:
 * - email: Unique email address (required, case-insensitive)
 * - password: Hashed password (required)
 * - role: User role type (recruiter, candidate, or demo)
 * - isDemo: Boolean flag indicating if this is a demo account
 * - timestamps: Auto-managed createdAt and updatedAt fields
 */const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['recruiter', 'candidate', 'demo'],
      default: 'candidate'
    },
    isDemo: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Generate a signed JWT for a given user ID.
 */
const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

/**
 * Format the user object returned to the client
 * (strips out sensitive fields).
 */
const sanitizeUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  createdAt: user.createdAt,
});

/* ── POST /api/auth/register ────────────────────── */
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const exists = await User.findOne({ email: email?.toLowerCase() });
    if (exists) {
      return res.status(409).json({ message: 'Email is already registered' });
    }

    // Create user (password hashed by pre-save hook)
    const user = await User.create({ name, email, password, role });

    // Generate token
    const token = signToken(user._id);

    res.status(201).json({
      message: 'Registration successful',
      token,
      user: sanitizeUser(user),
    });
  } catch (err) {
    next(err);
  }
};

/* ── POST /api/auth/login ───────────────────────── */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate presence
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user with password field included
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = signToken(user._id);

    res.json({
      message: 'Login successful',
      token,
      user: sanitizeUser(user),
    });
  } catch (err) {
    next(err);
  }
};

/* ── GET /api/auth/me  (protected) ──────────────── */
exports.getMe = async (req, res) => {
  // req.user is attached by the protect middleware
  res.json({ user: sanitizeUser(req.user) });
};

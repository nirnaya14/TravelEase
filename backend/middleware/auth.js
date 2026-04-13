const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') || req.headers['x-auth-token'];
    if (!token) return res.status(401).json({ success: false, message: 'No token. Authorization denied.' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'transport_booking_secret');
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ success: false, message: 'User not found' });
    if (!user.isActive) return res.status(403).json({ success: false, message: 'Account deactivated' });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: 'Token is not valid' });
  }
};

const adminAuth = async (req, res, next) => {
  await auth(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }
    next();
  });
};

module.exports = { auth, adminAuth };

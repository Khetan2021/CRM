const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

require('../config/passport')(passport);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const token = jwt.sign(req.user.toJSON(), process.env.JWT_SECRET, { expiresIn: '1h' });
  res.redirect(`/auth?token=${token}`);
});

module.exports = router;





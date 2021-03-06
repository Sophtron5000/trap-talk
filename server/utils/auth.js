const jwt = require('jsonwebtoken');

// secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '1h';

module.exports = {
  authMiddleware: function (req, res, next) {
    // req.query or headers
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return res.status(400).json({ message: 'invalid token!' });
    }
    // verify token 
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    next();
  },
  myToken: function ({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
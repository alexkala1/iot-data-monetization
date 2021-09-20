const express = require('express');

const ethereum = require('./ethereum');
const auth = require('./auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/ethereum', ethereum);
router.use('/auth', auth);

module.exports = router;

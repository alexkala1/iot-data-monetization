const express = require('express');
const Web3 = require('web3');

const router = express.Router();
const web3 = new Web3(process.env.INFURA_SECRET);

router.get('/', (req, res) => {
  res.json({ web3 });
});

module.exports = router;

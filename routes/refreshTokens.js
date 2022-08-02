const express = require('express');
const router = express.Router();
const refreshTokensHandler = require('./handler/refreshTokens');

router.post('/',refreshTokensHandler.create);
router.get('/',refreshTokensHandler.getToken);

module.exports = router;

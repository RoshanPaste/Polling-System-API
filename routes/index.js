const express       = require('express');
const router        = express.Router();

console.log("Router loaded");

router.get('/', (req, res) => {
    return res.send('<h1>Home Route</h1>');
});

router.use('/api', require('./api'));

module.exports = router;
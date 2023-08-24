const express           = require('express');
const router            = express.Router();
const optionsApi        = require('../../../controller/optionsController');


// Delete a option
router.delete('/:id/delete', optionsApi.delete);

// Increment the count of votes
router.post('/:id/add_vote' , optionsApi.add_vote);


module.exports = router;
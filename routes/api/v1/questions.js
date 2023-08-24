const express               = require('express');
const router                = express.Router();
const questionsApi          = require('../../../controller/questionsController');
const optionController      = require('../../../controller/optionsController');

// Create a Question
router.post('/create', questionsApi.create);

// Delete a Question
router.delete('/:id/delete', questionsApi.delete);

// View a question with it's options
router.get('/:id', questionsApi.getQuestion);

// Create a options for specific question
router.post("/:id/options/create", optionController.addOptions);

module.exports = router;
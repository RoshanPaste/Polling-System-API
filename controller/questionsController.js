const Options = require("../model/option");
const Question = require("../model/question");




module.exports.create = async (req, res) => {
    const questionData = req.body;

    try {
      // Using the 'Question' model to create a new question
        const createdQuestion = await Question.create(questionData);

      // Handle successful creation here, for example, send the created question in the response
        res.status(201).json(createdQuestion);
    } catch (error) {
      // Handle error here, for example, send an error response
        res
        .status(500)
        .json({ error: "An error occurred while creating the question." });
    }
};




module.exports.delete = async (req, res) => {
    const questionId = req.params.id;

    try {
    // Using the 'Question' model to find and delete the question by its ID
    const deletedQuestion = await Question.findByIdAndDelete(questionId);

    if (!deletedQuestion) {
        // If the question with the given ID doesn't exist, send an error response
        return res.status(404).json({ error: "Question not found." });
    }

    // Handle successful deletion here, for example, send a success response
    res.status(200).json({ message: "Question deleted successfully." });
    } catch (error) {
    // Handle error here, for example, send an error response
    res
        .status(500)
        .json({ error: "An error occurred while deleting the question." });
    }
};




module.exports.getQuestion = async (req, res) => {
    try {
    // Using the 'Question' model to fetch all questions
    const questionId = req.params.id;
    const questions = await Question.findById(questionId).populate('options');

        if (questions) {
            res.status(200).json(questions);
        } else {
            res.status(404).json({ message: "Question Not Found!"});
        }

    } catch (error) {
    // Handle error here, for example, send an error response
    res
        .status(500)
        .json({ error: "An error occurred while fetching the questions." });
    }
};

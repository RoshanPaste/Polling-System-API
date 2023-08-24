const Options      = require('../model/option');
const Questions    = require('../model/question');

// Controller to add a new option to a question
module.exports.addOptions = (req, res) => {
    // console.log("Question Id", req.params.id);
    // console.log("Option ", req.body.option);

    const questionId = req.params.id;

    // Create a new option with the text from the request body
    Options.create({ text: req.body.option })
        .then((option) => {
        if (option) {
            console.log("Successfully Created Option!!");

            // console.log("option._id: ", option._id);

            //Set the link_to_vote field for the option and save it
            // option.link_to_vote = `http://localhost:8000/api/v1/options/${option._id}/add_vote`;
            option.link_to_vote = `https://polling-system-api-gh3q.onrender.com/api/v1/options/${option._id}/add_vote`;
            option.save();

            Questions.findById(questionId)
            .then((question) => {
                if (!question) {
                return res.status(404).json({ message: "Question not found" });
                }

                question.options.push(option._id);
                question.save();

                res
                .status(200)
                .json({ message: "Successfully created option!", question });
            })
            .catch((err) => {
                console.log("Error finding question:", err);
                res.status(500).json({ message: "Internal Server Error" });
            });
        }
        })
        .catch((err) => {
        console.log("Error creating option:", err);
        res.status(500).json({ message: "Internal Server Error" });
    });
};


// Controller to delete an option
module.exports.delete = async (req, res)=> {
    try {
        const optionId = req.params.id;
        
        // Find and delete the option by its ID
        await Options.findByIdAndDelete(optionId);

        res.status(200).json({ message: "Successfully Deleted Option!"});
    } catch (err) {
        console.log("Error in Deleting a Option ",err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// Controller to add a vote to an option
module.exports.add_vote = (req, res)=>{
    const optionId = req.params.id;
    Options.findById(optionId)
    .then((option) => {
        if (option) {
        // Increament the votes count of the option and save it
        option.votes = option.votes + 1;
        option.save();

        res.status(200).json({ message: "Successfully Added Vote!" });
        }
    })
    .catch((err) => {
        console.log("Error");
        res.status(500).json({ message: "Internal Server Error!!" });
    });
};
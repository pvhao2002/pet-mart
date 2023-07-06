const Feedback = require('../models/feedback');

exports.getAllFeedback = async (req, res) => {
    try {
        const allFeedback = await Feedback.find();
        return res.status(201).json({ allFeedback });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

exports.createFeedback = async (req, res) => {
    try {
        const { fullname, phone, email, content } = req.body;
        const newFeedback = new Feedback({ fullname, phone, email, content });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

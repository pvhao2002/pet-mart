const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const Feedback = new Schema(
    {
        fullname: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Feedback', Feedback);

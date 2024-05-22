const mongoose = require('mongoose');

const classTimeTableSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    startTime: {
        type: String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/ // Matches HH:mm format
    },
    endTime: {
        type: String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/ // Matches HH:mm format
    },
    teacher: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    roomNumber: {
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    semester: {
        type: Number,
        required: true,
        min: 1,
        max: 8
    },
    academicYear: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ClassTimeTable", classTimeTableSchema);

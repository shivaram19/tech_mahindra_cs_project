const mongoose = require('mongoose');

const classTimeTableSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("classTimeTable", classTimeTableSchema);
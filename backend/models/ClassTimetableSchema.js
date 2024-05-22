const mongoose = require('mongoose');

const classTimeTableSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    startTime: {
        type: Number,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        ref: 'sclass',
        required: true,
    },
    subject: {
        type: String,
        ref: 'admin',
        required: true,
    },
    roomNumber: {
        type: String,
        ref: 'admin',
        required: true,
    },
    course: {
        type: String,
        ref: 'admin',
        required: true,
    },
    semester: {
        type: String,
        ref: 'admin',
        required: true,
    },
    academicYear: {
        type: String,
        ref: 'admin',
        required: true,
    }
});

module.exports = mongoose.model("timetable", classTimeTableSchema);
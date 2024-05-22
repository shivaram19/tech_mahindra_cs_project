const ClassTimetableSchema = require("../models/ClassTimetableSchema");

const addClassTimeTable = async ( req, res ) => {
  const { day, startTime, endTime, teacher, subject, room , course, semester, academicYear } = req.body;

    try {
        const addTimeTable = await ClassTimetableSchema.create({
          day: day,
          course:course,
          endTime:endTime,
          roomNumber:room,
          semester:semester,
          startTime:startTime,
          subject:subject,
          teacher:teacher,
          academicYear:academicYear
        })
        const result = await addTimeTable.save()
        res.send(result)
    } catch (error) {
        console.error("error in creatung TimeTable", error);
    }
}

const getTimeTable = async (req, res) => {
  try {
    let timetables = await ClassTimetableSchema.find()
    res.json({timetables})
  } catch (error) {
    res.send(" error in finding your timetables ")
    console.error("error in finding your table " , error );
  }
}

module.exports = {
  addClassTimeTable,
  getTimeTable
}
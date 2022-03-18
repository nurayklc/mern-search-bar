const Student = require("../models/Student")

exports.getAllStudent = async(req, res) => {
    await Student.find({}, (err, student) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!student.length) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` })
        }
        return res.status(200).json({ success: true, data: student })
    }).clone()
}
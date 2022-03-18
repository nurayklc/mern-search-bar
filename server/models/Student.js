const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    ID: String,
    Team: {
        type: String,
        enum: ["Men", "Women"]
    },
    Country: String,
    "First Name": String,
    "Last Name": String,
    DOB: String,
    Hometown: String,
    Prov: String,
    IsVerified: Boolean,
    Age: String,
})

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
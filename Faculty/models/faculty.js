const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const facultySchema = new mongoose.Schema(
  {
    first_Name: {
      type: String,
      required: true,
    },
    last_Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    faculty_id: {
      type: Number,
      required: true,
      unique: true,
    },
    faculty_position: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    IpAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// Hash the password before saving the user
/*studentSchema.pre('save', async function (next) {
    const student = this;
    if (!student.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(student.password, salt);
        student.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});*/
const Faculty_signup = mongoose.model("faculty_info", facultySchema);
module.exports = Faculty_signup;

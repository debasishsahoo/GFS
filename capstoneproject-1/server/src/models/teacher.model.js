const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema(
  {
    teacher_name: { type: String, require: true },
    qualification: { type: String, require: true },
    address: { type: String, require: true },
    contact_no: { type: String, require: true },
    age: { type: Number, require: true },
    gender: { type: String, require: true },
    image: { type: String, default: null },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

const TeacherModel = mongoose.model("Teacher", TeacherSchema);

module.exports = TeacherModel;

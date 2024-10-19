const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    student_name: { type: String, require: true },
    class_name: { type: String, require: true },
    roll: { type: Number, default: null },
    address: { type: String, require: true },
    parent_name: { type: String, require: true },
    contact_no: { type: String, require: true },
    age: { type: Number, require: true },
    gender: { type: String, require: true },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;

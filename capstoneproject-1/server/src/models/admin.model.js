const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    image: { type: String, default: null },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;

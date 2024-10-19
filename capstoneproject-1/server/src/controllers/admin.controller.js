const mongoose = require("mongoose");
const AdminService = require("../services/admin.services");

const signUp = async (req, res) => {
  //Received Data Form Request Body
  const { name, email, password } = req.body;

  //Checking the Data is Ok or Not
  if (!name || !email || !password) {
    return res.status(400).send({
      message:
        "Please Provide All the Data,name or Email or Password is Messing",
      error: "Bad Request",
    });
  }

  //Checking the User is Exist or Not
  const oldAdmin = await AdminService.getOneRecordByQuery({ email: email });
  if (oldAdmin) {
    return res.status(409).send({
      message: "User is Already Exist",
      error: "Conflict",
    });
  }

  //Hashed Password

  const payload = {
    ...req.body,
  };

  try {
    const newAdmin = await AdminService.setRecord(payload);
    return res.status(201).send({
      message: "success",
      error: "null",
      data: newAdmin,
    });
  } catch (error) {
    return res.status(500).send({
      message: "failure",
      error: `${error}`,
    });
  }
};

const signIn = async (req, res) => {};
const signOut = async (req, res) => {};

const getAdmins = async (req, res) => {};
const getAdminById = async (req, res) => {};
const getAdminByQuery = async (req, res) => {};

const updateAdminById = async (req, res) => {};
const deleteAdminById = async (req, res) => {};

module.exports = {
  signUp,
  signIn,
  signOut,
  getAdmins,
  getAdminById,
  getAdminByQuery,
  updateAdminById,
  deleteAdminById,
};

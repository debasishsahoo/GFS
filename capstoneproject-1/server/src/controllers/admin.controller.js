const mongoose = require("mongoose");
const AdminService = require("../services/admin.services");
const passwordUtility = require("../utils/hash.util");
const tokenUtility = require("../utils/token.util");

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
  const hashedPassword = await passwordUtility.HashPassword(password);
  if (!hashedPassword) {
    return res.status(401).send({
      message: "Password Hashing is Getting Problem",
      error: "UnAuthorized",
    });
  }

  const payload = {
    ...req.body,
    password: hashedPassword,
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

const signIn = async (req, res) => {
  const { email, password } = req.body;

  //Checking the Data is Ok or Not
  if (!email || !password) {
    return res.status(400).send({
      message: "Please Provide All the Data,Email or Password is Messing",
      error: "Bad Request",
    });
  }

  //Checking the User is Exist or Not
  const oldAdmin = await AdminService.getOneRecordByQuery({ email: email });
  if (!oldAdmin) {
    return res.status(404).send({
      message: "User is Not Exist",
      error: "Not Found",
    });
  }

  //Checked  Password

  const checkedPassword = await passwordUtility.MatchPassword(
    password,
    oldAdmin.password
  );

  if (checkedPassword) {
    try {
      // token payload
      const tokenPayload = {
        _id: oldAdmin._id,
        email: oldAdmin.email,
      };

      // token generate
      const token = await tokenUtility.generateToken(tokenPayload);

      //token Option
      const tokenOption = {
        httpOnly: true,
        secure: true,
      };

      //create return Data
      const returnData = {
        name: oldAdmin.name,
        email: oldAdmin.email,
        image: oldAdmin.image,
        isAdmin: oldAdmin.isAdmin,
      };

      return res.cookie("token", token, tokenOption).status(200).send({
        message: "success",
        error: null,
        token: token,
        data: returnData,
      });
    } catch (err) {
      return res.status(500).send({
        message: "failure",
        error: `${err}`,
      });
    }
  } else {
    return res.status(401).send({
      message: "failure",
      error: "UnAuthorized Access",
    });
  }
};

const signOut = async (req, res) => {
  try {
    return res.clearCookie("token").status(200).send({
      message: "success",
      error: null,
      data: [],
    });
  } catch (err) {
    return res.status(500).send({
      message: "failure",
      error: err.message || err,
    });
  }
};

const getAdmins = async (req, res) => {
  try {
    const allAdmin = await AdminService.getAllRecord();
    if (!allAdmin) {
      return res.status(404).send({
        message: "No Data Found",
        error: null,
        data: [],
      });
    }
    const count = allAdmin.length;
    return res.status(200).send({
      message: `Success,${count} Data Found`,
      error: null,
      data: allAdmin,
    });
  } catch (error) {
    return res.status(500).send({ message: "failure", error: error, data: [] });
  }
};

const getAdminById = async (req, res) => {
  const adminId = req.params.id;
  if (mongoose.isValidObjectId(adminId)) {
    try {
      const singleAdmin = await AdminService.getOneRecordByID(adminId);
      if (!singleAdmin) {
        return res.status(404).send({
          message: "No Data Found with this ID",
          error: null,
          data: [],
        });
      }
      return res
        .status(200)
        .send({ message: "success", error: null, data: singleAdmin });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failure", error: `${error}`, data: null });
    }
  }else{
    return res
        .status(500)
        .send({ message: "failure", error: `${error}`, data: null });
  }
};

const getAdminByQuery = async (req, res) => {};

const updateAdminById = async (req, res) => {
  const adminId = req.params.id;
  if (mongoose.isValidObjectId(adminId)) {
    try {
      const { name, image, isAdmin } = req.body;
      const singleAdmin = await AdminService.getOneRecordByID(adminId);
      if (!singleAdmin) {
        return res.status(404).send({
          message: "No Data Found with this ID",
          error: null,
          data: [],
        });
      }
      const updateOldAdmin = await AdminService.updateOneRecordById(adminId, {
        name,
        image,
        isAdmin,
      });
      return res
        .status(200)
        .send({ message: "success", error: null, data: updateOldAdmin });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failure", error: "id is Not Valid", data: null });
    }
  }
};
const deleteAdminById = async (req, res) => {
  const adminId = req.params.id;
  if (mongoose.isValidObjectId(adminId)) {
    try {
      const deleteAdmin = await AdminService.DeleteOneRecordById(adminId);
      if (!deleteAdmin) {
        return res.status(404).send({
          message: "No Data Found with this ID",
          error: null,
          data: [],
        });
      }

      return res
        .status(200)
        .send({ message: "success", error: null, data: deleteAdmin });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failure", error: "id is Not Valid", data: null });
    }
  }
};

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

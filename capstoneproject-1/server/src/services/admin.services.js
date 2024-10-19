const AdminTable = require("../models/admin.model");

//Insert Record
const setRecord = async (dataPayload) => {
    const newRecord=await AdminTable.create(dataPayload);
    return newRecord;
};

//Get All Record
const getAllRecord = async () => {
    const allRecord= await AdminTable.find()
    return allRecord;
};

//Get one Record By Id
const getOneRecordByID = async (id) => {
    const singleRecord=await AdminTable.findById(id)
    return singleRecord;
};

//Get one Record By Search Query
const getOneRecordByQuery = async (query) => {
    const singleRecord=await AdminTable.findOne(query)
    return singleRecord;
};

//Update One Record By Id
const updateOneRecordById = async (id,updatedPayload) => {
    const updateRecord=await AdminTable.findByIdAndUpdate(id,updatedPayload,{new:true});
    return updateRecord;
};

// Delete One Record By Id
const DeleteOneRecordById = async (id) => {
    const deleteRecord=await AdminTable.findByIdAndDelete(id);
    return deleteRecord;
};

module.exports = {
  setRecord,
  getAllRecord,
  getOneRecordByID,
  getOneRecordByQuery,
  updateOneRecordById,
  DeleteOneRecordById,
};

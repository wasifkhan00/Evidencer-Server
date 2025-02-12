const mongoose = require("mongoose");

const myPersonalDataSchema = new mongoose.Schema({
  _id: { required: true, type: mongoose.Schema.Types.ObjectId },
  fileName: { required: true, type: String },
  fileSize: { required: true, type: String },
  fileType: { required: true, type: String },
  fileURL: { required: true, type: String },
  fileDescription: { required: true, type: String },
  fileUploadedAt: { required: true, type: date },
  fileUploadedBy: { required: true, type: String },
  fileUploadedVia: { required: true, type: String },
});

const myPersonalData = mongoose.model(
  "myPersonalData",
  myPersonalDataSchema,
  "EVIDENCES"
);

module.exports = myPersonalData;

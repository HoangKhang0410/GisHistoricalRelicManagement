const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const damageReportSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  cause: {
    type: String,
    require: true,
  },
  userID: {
    type: mongoose.Types.ObjectId,
    ref: 'Accounts',
  },
  prismID: {
    type: mongoose.Types.ObjectId,
    ref: "Prism"
  },
  cylinderID: {
    type: mongoose.Types.ObjectId,
    ref: "Cylinder"
  },
  bodyCompID: {
    type: mongoose.Types.ObjectId,
    ref: "BodyComplex"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DamageReports', damageReportSchema);
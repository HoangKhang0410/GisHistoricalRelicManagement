const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const damageReportSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
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
  materialID: {
    type: mongoose.Types.ObjectId,
    ref: 'Materials',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DamageReports', damageReportSchema);
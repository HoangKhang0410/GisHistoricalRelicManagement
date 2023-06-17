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
  entityID: {
    type: mongoose.Types.ObjectId,
    ref: 'Entities',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DamageReports', damageReportSchema);
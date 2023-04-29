const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entityRepairStatusSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  finishDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    require: true,
  },
  repairReason: {
    type: String,
    require: true,
  },
  entityID: {
    type: mongoose.Types.ObjectId,
    ref: 'Entities'
  },
  accountID: {
    type: mongoose.Types.ObjectId,
    ref: 'Accounts',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('EntityRepairStatuses', entityRepairStatusSchema);
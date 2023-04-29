const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  historicalSiteID: {
    type: mongoose.Types.ObjectId,
    ref: 'HistoricalSites',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Entities', entitySchema);
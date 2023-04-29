const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historicalSiteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  state: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('HistoricalSites', historicalSiteSchema);
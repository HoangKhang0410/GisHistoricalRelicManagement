const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faceSchema = new Schema({
  nodeIDs: [{
    type: mongoose.Types.ObjectId,
    ref: 'Nodes',
    required: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Faces', faceSchema);
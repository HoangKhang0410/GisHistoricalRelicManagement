const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cylinderSchema = new Schema({
  nodeID: {
    type: mongoose.Types.ObjectId,
    ref: 'Nodes',
    required: true,
  },
  radius: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  attributeID: {
    type: mongoose.Types.ObjectId,
    ref: 'Attributes',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Cylinders', cylinderSchema);
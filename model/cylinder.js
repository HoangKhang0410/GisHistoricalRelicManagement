const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cylinderSchema = new Schema({
  nodeIds: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Node',
        required: true,
      }
    ],
    required: true
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  path: {
    type: String,
    required: true,
  },
  materialIds: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Material',
        required: true,
      }
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Cylinder', cylinderSchema);
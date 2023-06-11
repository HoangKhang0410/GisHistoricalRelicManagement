const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyComplexSchema = new Schema({
  faceIDs: {
    type: [{
      type: mongoose.Types.ObjectId,
      ref: 'Face',
      required: true,
    }],
    required: true
  },
  materialIds: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Material',
        required: true,
      }
    ],
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  width: {
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BodyComplexe', bodyComplexSchema);
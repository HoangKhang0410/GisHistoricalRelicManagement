const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prismSchema = new Schema({
  faceID: {
    type: mongoose.Types.ObjectId,
    ref: 'Faces',
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

module.exports = mongoose.model('Prisms', prismSchema);
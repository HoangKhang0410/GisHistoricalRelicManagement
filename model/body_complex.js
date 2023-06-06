const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyComplexSchema = new Schema({
  faceIDs: [{
    type: mongoose.Types.ObjectId,
    ref: 'Faces',
    required: true,
  }],
  attributeID: {
    type: mongoose.Types.ObjectId,
    ref: 'Attributes',
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BodyComplexes', bodyComplexSchema);
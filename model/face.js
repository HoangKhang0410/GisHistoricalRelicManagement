const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faceSchema = new Schema({
  nodeIds: {
    type: [{
      type: mongoose.Types.ObjectId,
      ref: 'Node',
      required: true,
    }],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Face', faceSchema);
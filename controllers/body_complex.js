const BodyComplex = require('../model/body_complex');
const { formatObject } = require('../utils/format_geojson')

const bodyComplexController = {
  getBodyComplexByPath: async (req, res) => {
    const path = req.query.path;
    try {
      const bodyComplex = await BodyComplex.find({ path: path }).populate({
        path: 'faceIDs',
        populate: {
          path: 'nodeIds',
        }
      });
      if (!bodyComplex) return res.status(400).json({ success: false, message: 'BodyComplex not found' });
      const result = formatObject(bodyComplex, "bodyComplex")
      console.log(result)
      res.json(result);
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = bodyComplexController
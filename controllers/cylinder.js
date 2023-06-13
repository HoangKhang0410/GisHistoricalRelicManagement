const Cylinder = require('../model/cylinder');
const { formatObject } = require('../utils/format_geojson')

const cylinderController = {
  getCylinderByPath: async (req, res) => {
    const path = req.query.path;
    try {
      const cylinder = await Cylinder.find({ path: path }).populate({
        path: 'faceID',
        populate: {
          path: 'nodeIds',
        }
      });
      if (!cylinder) return res.status(400).json({ success: false, message: 'Cylinder not found' });
      const result = formatObject(cylinder)
      console.log(result)
      res.json(result);
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = cylinderController
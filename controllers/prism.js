const Prism = require('../model/prism');

const prismController = {
  getPrismByPath: async (req, res) => {
    const path = req.query.path;
    console.log(typeof path)
    try {
      const prism = await Prism.find();
      if (!prism) return res.status(400).json({ success: false, message: 'prism not found' });
      res.json({ success: true, prism });
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = prismController;
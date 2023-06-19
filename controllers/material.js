const Material = require('../model/material');

const materialController = {
  getAllMaterial: async (req, res) => {
    try {
      const material = await Material.find()
      if (!material) return res.status(400).json({ success: false, message: 'Materials not found' });
      res.status(200).json(material);
    } catch (error) {
      console.log(error)
    }
  },
  getMaterialByID: async (req, res) => {
    try {
      const id = req.params.id;
      const material = await Material.findById(id)
      if (!material) return res.status(400).json({ success: false, message: 'Material not found' });
      res.status(200).json(material);
    } catch (error) {
      console.log(error)
    }
  },
  saveMaterial: async (req, res) => {
    try {
      const { name, age, description } = req.body
      const material = await Material.create({
        name,
        age,
        description
      })
      res.status(201).json({ material })
    } catch (error) {
      console.log(error)
    }
  },
  updateMaterial: async (req, res) => {
    try {
      const { update, filter } = req.body
      const newMaterial = await Material.findOneAndUpdate(filter, update, { new: true })
      if (!newMaterial) return res.status(400).json({ success: false, message: 'The material not found' });
      res.status(200).json(newMaterial);
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
  deleteMaterialByID: async (req, res) => {
    try {
      const id = req.params.id;
      const material = await Material.findByIdAndDelete(id)
      if (!material) return res.status(400).json({ success: false, message: 'Material not found' });
      res.status(200).json(material);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = materialController
const DamageReport = require('../model/damage_report');
const Prism =  require('../model/prism');
const Cylinder = require('../model/cylinder');
const BodyComp = require('../model/body_complex');

const damageReportController = {
  getAllDamageReport: async (req, res) => {
    try {
      const damageReport = await DamageReport.find().populate([
        {
          path: 'userID',
          select: ['email', 'name']
        },
      ]);

      const prism = Prism.findById(damageReport.entityID).select('name description path height width color')
      const cylinder = Cylinder.findById(damageReport.entityID).select('name description path height width color')
      const bodyComp = BodyComp.findById(damageReport.entityID).select('name description path height width color')

      var entities = await Promise.all(prism, cylinder, bodyComp)
      entities = entities.filter(entity => entity === null)

      delete damageReport.entityID
      damageReport.entity = entities[0]

      if (!damageReport) return res.status(400).json({ success: false, message: 'The report not found' });
      res.status(200).json(damageReport);
    } catch (error) {
      console.log(error)
    }
  },
  saveDamageReport: async (req, res) => {
    try {
      const { cause, content, userID, entityID } = req.body
      const damageReport = await DamageReport.create({
        cause,
        content,
        userID,
        entityID
      })
      res.status(201).json({ damageReport })
    } catch (error) {
      console.log(error)
    }
  },
  deleteDamageReport: async (req, res) => {
    const id = req.params.id;
    try {
      const damageReport = await DamageReport.findByIdAndDelete(id)
      if (!damageReport) return res.status(400).json({ success: false, message: 'The report not found' });
      res.status(200).json({
        success: true,
        message: 'Delete report successfully!',
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
}

module.exports = damageReportController
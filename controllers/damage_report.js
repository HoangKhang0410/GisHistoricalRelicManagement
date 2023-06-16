const DamageReport = require('../model/damage_report');

const damageReportController = {
  getAllDamageReport: async (req, res) => {
    try {
      const damageReport = await DamageReport.find().populate([
        {
          path: 'userID',
        },
        {
          path: 'entityID',
        }
      ]);
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
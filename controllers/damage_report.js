const DamageReport = require('../model/damage_report');

const damageReportController = {
  getAllDamageReport: async (req, res) => {
    try {
      const damageReport = await DamageReport.find().populate([
        {
          path: 'userID',
        },
        {
          path: 'prismID',
        },
        {
          path: 'cylinderID',
        },
        {
          path: 'bodyCompID',
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
      const { cause, content, userID, prismID, cylinderID, bodyCompID } = req.body
      const damageReport = await DamageReport.create({
        cause,
        content,
        userID,
        prismID, 
        cylinderID, 
        bodyCompID
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
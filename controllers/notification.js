const Notification = require('../model/notification');

const notificationController = {
  getAllNotification: async (req, res) => {
    try {
      const notification = await Notification.find()
      if (!notification) return res.status(400).json({ success: false, message: 'Notifications not found' });
      res.status(200).json(notification);
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = notificationController
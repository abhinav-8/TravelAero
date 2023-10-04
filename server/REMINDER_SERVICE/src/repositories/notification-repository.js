const { Notification } = require('../models/index');
const { Op } = require('sequelize');

class NotificationRepository {

    async getAll() {
        try {
            const notifications = await Notification.findAll();
            return notifications;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const resp = await Notification.create(data);
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async get(filter) {
        try {
            const resp = await Notification.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async update(notificationId, data) {
        try {
            const resp = await Notification.findByPk(notificationId);
            resp.status = data.status;
            await resp.save();
            return resp;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = NotificationRepository;
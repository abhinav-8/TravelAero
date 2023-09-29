const sender = require('../config/emailConfig');
const NotificationRepository = require('../repositories/notification-repository');

const repo = new NotificationRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });  
        return response;     
    } catch (error) {
        console.log('Error in email service');
    }
}

const fetchPendingEmails = async(timestamp) => {
    try {
        const response = await repo.get({status:'PENDING'});
        return response;
    } catch (error) {
        throw error;
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

const updateNotification = async (notificationId, data) => {
    try {
        const response = await repo.update(notificationId, data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateNotification
}


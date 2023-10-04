const NotificationService = require('../services/email-service');

const create = async(req,res) => {
    try {
        const response = await NotificationService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message: 'Successfully registered an email reminder'
        }); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: response,
            err: error,
            message: 'Can\'t create an email reminder'
        });
    }
}

module.exports = {
    create,
}
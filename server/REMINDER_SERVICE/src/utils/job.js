const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');
const emailTemplate = require('./emailTemplate');

/**
 * 10:00 am
 * Every 5 mins
 * We will check are their any pending emails which were expected to 
 * be sent by now and is pending
 */

const setupJobs = () => {
    cron.schedule('*/3 * * * *', async () => {
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            const data = JSON.parse(email.dataValues.content);
            const reminderText=`Hello ${data.name},
            
            This Email is to remind you of your upcoming journey.Please find your E-ticket below.`;
            sender.sendMail({
                from:"TravelAero <support@travelaero.com>",
                to:email.recipientEmail,
                subject:email.subject,
                html:emailTemplate(
                    data.departureCity,
                    data.departureAirport,
                    data.arrivalCity,
                    data.arrivalAirport,
                    data.departureTime,
                    data.arrivalTime,
                    data.passengerCount,
                    data.totalPrice,
                    data.flightNumber,
                    data.name,
                    reminderText,
                ),
            }, async(err,data)=>{
                if(err){
                    throw err;
                } else {
                    await emailService.updateNotification(email.id, {status: "SUCCESS"});
                }
            })
        });
    });
}

module.exports = setupJobs;
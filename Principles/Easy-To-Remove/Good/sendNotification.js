const sendSMS = require('./sendSMS')
const sendEmail = require('./sendEmail')
const pushNotification = require('./pushNotification')


const sendNotification = () => {
    sendSMS()
    sendEmail()
    pushNotification()
}

module.exports = sendNotification
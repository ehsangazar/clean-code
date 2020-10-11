const sendEmail = require('./sendEmail')
const sendSMS = require('./sendSMS')
const pushNotifacation = require('./pushNotifacation')

function register(message) {
    // Bought

    sendEmail()
    sendSMS()
    pushNotifacation()
}

module.exports = register
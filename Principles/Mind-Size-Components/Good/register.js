const sendEmail = require('./sendEmail')
const sendSMS = require('./sendSMS')
const pushNotification = require('./pushNotification')

function register(message) {
    // Registered
    console.log('Registered')

    sendEmail()
    sendSMS()
    pushNotification()
}

module.exports = register
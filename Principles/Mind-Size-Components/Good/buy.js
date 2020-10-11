const sendEmail = require('./sendEmail')
const sendSMS = require('./sendSMS')
const pushNotification = require('./pushNotification')

function buy(message) {
    // Bought
    console.log('Bought')

    sendEmail()
    sendSMS()
    pushNotification()
}

module.exports = buy
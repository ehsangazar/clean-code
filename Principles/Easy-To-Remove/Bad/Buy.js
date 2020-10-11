const sendEmail = require('./sendEmail')
const sendSMS = require('./sendSMS')
const pushNotifacation = require('./pushNotifacation')

function buy(message) {
    // Bought

    sendEmail()
    sendSMS()
    pushNotifacation()
}

module.exports = buy
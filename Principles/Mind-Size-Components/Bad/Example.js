function pushNotification() {
    console.log('pushNotification')
}

function sendSMS() {
    console.log('sendSMS')
}

function sendEmail() {
    console.log('sendEmail')
}

function register(message) {
    // Registered
    console.log('Registered')

    sendEmail()
    sendSMS()
    pushNotification()
}

function buy() {
    // Bought
    console.log('Bought')

    sendEmail()
    sendSMS()
    pushNotification()
}


buy()
register()
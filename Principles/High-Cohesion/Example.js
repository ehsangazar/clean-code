// Low Cohesion - Bad
class myInput {
    checkEmail = () => {}
    validateEmail = () => {}
    validatePhone = () => {}
    printValue = () => {}
    printAddress = () => {}
}


// High Cohesion - Good
class myInput {}

class validator {
    validateEmail = () => {}
    validateAddress = () => {}
    validateMobile = () => {}
}
class mailer {
    sendEmail = () => {}
}
class printer {
    printValue = () => {}
}
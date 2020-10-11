// BAD

const c = 2

const nameList = ['ehsan','jack']

const cust = 'Ehsan'

const dateCAT = '2020-10-08'

const click = () => {}

class person {}

// remove() or destroy() or delete()

// camelCase
// PascalCase
// kebab-case
// snake_case
// constants
// private methods

// GOOD

const count = 2

const names = ['ehsan','jack']

const customer = 'Ehsan'

const date_created_at = "2020-10-08"

const handleClick = () => {}
const handlePress = () => {}
const shiftData = () => {}

class Person {}

class Person {
    remove()
}

// camelCase
const namesOfClients = []
const countOfClients = []

// PascalCase
class Person {}
class House {}

// kebab-case
const PERSON-MESSAGE = ''

// snake_case
const PERSON_MESSAGE = ''

// CONSTANTS
const MESSAGE = {
    SUCCESSFUL: 'You have registered succesfully'
}

// private 
class Person {
    _handleAddToAge = () => {
        
    }
}
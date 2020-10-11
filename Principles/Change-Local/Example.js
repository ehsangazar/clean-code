const globalState = {}

// Not Local - Bad
function handleChange() { globalState = false }



// Change Locally - Good
function handleChangeLocally() { 
    const state = false
    return state
}

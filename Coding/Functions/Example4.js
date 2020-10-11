// Bad
function createFile(name, temp) {
    if (temp) {
        fs.create(`./temp/${name}`);
    } else {
        fs.create(name);
    }
}

// Good
function createFile(name){
    fs.create(name);
}

function createTempFile(name){
    fs.create(`./temp/${name}`);
}
// Bad
let name = "Ryan McDermott";

function splitIntoFirstAndLastName() {
    name = name.split(" ");
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];


// Good

function splitIntoFirstAndLastName(name) {
  return name.split(" ");
}

let name = "Ryan McDermott";
let splittedName = splitIntoFirstAndLastName(name);

console.log(splittedName); // ['Ryan', 'McDermott'];

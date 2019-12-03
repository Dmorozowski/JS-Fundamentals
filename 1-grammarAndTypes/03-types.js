// Booleans or Bools
let i = true;

let j = false;

console.log(i, j)

// Null

let test = null

// Undefined
let myName = undefined;
let otherName;

// Number
let degrees = 90;

let precise = 999999999999999;
console.log(precise);
let overflow = 9999999999999999;
console.log(overflow);
let notQuite = (0.1 + 0.2).toFixed(2);
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let numbers = '123';
console.log(numbers);

// Strings
let stringOne = "Doubley bois";
let string2 = 'singley bois';

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);

console.log(typeof first, typeof second);

console.log('123' + 999);

// Objects
// Key value pairs separated by a comma
let car1 = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true,
    '1something' : 'A things'
}


car1.make = 'Ford';

console.log(car1);
console.log(car1.tires);

console.log(car1.make);
car1['model'] = 'Bronco';
console.log(car1['model']);

// Arrays
let burritos = ['large', 4, true];
console.log(burritos);
console.log(burritos[1]);
// An array is a type of an object
console.log(typeof burritos);
// Double check that it is an array, and not just an object
console.log(burritos instanceof Array);
// Find the total number within the array... knwow what number to use if you want to identify the last item
console.log(burritos.length);


let a = "hello"
let b = "hi"

console.log(a + b);
console.log(a + " " + b);

// let greet = "Hey"
// let name = "Dylan"

console.log(`${greet} ${name}!`)
console.log(`${greet} ${name}! How are you?`)

let dylan = {
    firstName: 'Dylan',
    lastName: 'Morozowski',
    houseNumber: 248,
    street: 'Greenlee Drive',
    city: 'Indianapolis',
    state: 'IN',
    zipcode: '46234'
}
console.log(dylan)

let greet = "Hello, my name is"
let address = "I live at"
console.log(`${greet} ${dylan.firstName} ${dylan.lastName}. ${address} ${dylan.houseNumber} ${dylan.street} ${dylan.city}, ${dylan.state} ${dylan.zipcode}.`)


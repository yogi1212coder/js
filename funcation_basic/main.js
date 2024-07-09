// const FIRST_NAME="";
 
// function getMyFirstName() {
//     const FIRST_NAME = "Ajay";
//     return FIRST_NAME;
// }
// getMyFirstName();
// console.log(FIRST_NAME);

let myFullName = getMyFullName("ajay", "");
let myMystkeFullName = getMyFullName("ajay");
function getMyFullName(firstName ,lastName) {
    
    return firstName + lastName;
}

let y = addition(5, 5);
function addition(intgerOne, intgerTwo) {

    return intgerOne + intgerTwo;
}

let z = subtretion(5, 5);
function subtretion(intgerOne, intgerTwo) {
  
return intgerOne - intgerTwo;
}



// chllanges

// in this petren can t ingore  krene ke lia mt value deni hogi
// i can t pass daynamic parameter


// function greet(name) {
//   console.log('Namaste, ' + name + '!');
// }

// Dynamic parameter pass karte hain
// let personName = 'Ram';
// greet(personName);



// let person = {
//   name: 'Ram',
//   age: 25
// };

// Object ko modify karte hain
// person.age = 26;
// person.name = "sanju";

// console.log(person);

// let numbers = [1, 2, 3];

// // Array ko modify karte hain
// numbers.push(4);
// numbers.push(5);
// console.log(numbers);






// let greeting = 'Hello';

// // String ko modify karte hain (actually naye string create hota hai)
// greeting = greeting + ', World!';
// greeting = greeting + ",gfdhfdf";
// console.log(greeting);







 
// let number = add(5,0,null );
// function add(intgerOne, intgerTwo,intgerThree) {
  
// return intgerOne + intgerTwo+intgerThree;
// }
// console.log("sum:", number);


// Spread Operator

// let numbers = [1, 2, 3,4];
// let moreNumbers = [...numbers, 5, 5, 6];

// console.log(moreNumbers);


// let person = {
//     name: 'Ram',
//     age: 25,
    
//  };
// let employee = { ...person, salary: 50000 };

// console.log(employee);



// function add(a, b, c) {
//   return a + b + c;
// }

// let numbers = [1, 2, 3];
// console.log(add(...numbers));












function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2);
console.log(value);


function getUserName(userName) {
    if (userName === undefined || userName === "") {
        return "please enter username";
    }
    return userName;
}

let myUserName = getUserName("");
console.log(myUserName);
let myUserName1 = getUserName();
console.log(myUserName);
let myUserName2 = getUserName("Ajay");
console.log(myUserName2);



// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3)); 
// console.log(sum(1, 2, 3, 4, 5)); 





// function greet( greeting ,...names) {
//     return `hello ${greeting} ,${names}`;
// }

function displayPerson({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

displayPerson(person); 


function displayUser({
  name,
  
}) {
  console.log(`Name: ${name}, `);
}

const user = {
  name: "Ajay",
  address: {
    city: "chomu",
    country: "jaipur"
    }
  
};

displayUser(user); 






function square(x) {
    return x * x;
}

console.log(square(5)); 
console.log(square(3));  
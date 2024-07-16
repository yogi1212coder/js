// const FIRST_NAME="";
 
// function getMyFirstName() {
//     const FIRST_NAME = "Ajay";
//     return FIRST_NAME;
// }

// getMyFirstName();
// console.log(FIRST_NAME);

// let myFullName = getMyFullName("ajay", "");
// let myMystkeFullName = getMyFullName("ajay");
// function getMyFullName(firstName ,lastName) {
    
//     return firstName + lastName;
// }

// let y = addition(5, 5);
// function addition(intgerOne, intgerTwo) {

//     return intgerOne + intgerTwo;
// }

// let z = subtretion(5, 5);
// function subtretion(intgerOne, intgerTwo) {
  
// return intgerOne - intgerTwo;
// }



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



// rest Parameters

// rest parameters me data spred opereter ke karn array me convert ho jata h
// Rest parameters JavaScript mein kisi function ke liye multiple arguments ko ek array mein collect karne ke liye use kiye jaate hain.Yeh flexible hote hain aur function definition mein ... ke saath define kiye jaate hain.

// function getBioData(firstName, lastName, ...viewDetails) {
//     return `Fullname: ${firstName} ${lastName}, Details: ${viewDetails[0] } ${viewDetails[1] }`;
// }

// console.log(getBioData('John', 'Doe', 'Age: 30', 'City: New York', 'Occupation: Developer'));
                              
    

// function sum(...numbers) {
//     return numbers.reduce((a,b )=> a+b,0 );
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));





// function myFunction(g1, g2) {
//     return g1 / g2;
// }
// const value = myFunction(8, 2);
// console.log(value);


// function getUserName(userName) {
//     if (userName === undefined || userName === "") {
//         return "please enter username";
//     }
//     return userName;
// }

// let myUserName = getUserName("");
// console.log(myUserName);
// let myUserName1 = getUserName();
// console.log(myUserName);
// let myUserName2 = getUserName("Ajay");
// console.log(myUserName2);



// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));





// function greet( greeting ,...names) {
//     return `hello ${greeting} ,${names}`;
// }

// function displayPerson({ name, age, city }) {
//   console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// }

// const person = {
//   name: "John Doe",
//   age: 30,
//   city: "New York"
// };

// displayPerson(person);


// function displayUser({
//   name,
  
// }) {
//   console.log(`Name: ${name}, `);
// }

// const user = {
//   name: "Ajay",
//   address: {
//     city: "chomu",
//     country: "jaipur"
//     }
  
// };

// displayUser(user);






// function square(x) {
//     return x * x;
// }

// console.log(square(5));
// console.log(square(3));

// function add(x) {
//     return x + x;
// }

// console.log(add(5));
// console.log(add(3));



// function calculateGST(productPrice) {
// 	return productPrice * 0.05;
// }
// console.log(calculateGST(15))



// let tax = 20;
// function calculateGST(productPrice) {
// 	return productPrice * (tax / 100) + productPrice;
// }
// console.log(calculateGST(15))


// let produtItem = 5;

// function calculateTotalPrice(productPrice) {
//     return productPrice * produtItem;
// }


// console.log(calculateTotalPrice(400));
 


    


// Higher-order function ek aisa function hota hai jo ek ya zyada functions ko as a parameter accept karta hai, ya ek function ko as a return value return karta hai.

// function applyOperation(operation) {
//     return operation("hello");
// }

// const add = (name) => name + "Ajay";

// console.log(applyOperation(add));

    


            
    


//  Error Handling

// error lo  handlin g kr sakte h


         
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error('Division by zero is not allowed.');
//     }
//     return a / b;
// }

// try {
//     console.log(divide(4, 2));
//     console.log(divide(4, 0));
// } catch (error) {
//     console.error(error.message);
// }
    



// function getUserName(userName) {
//     if (userName === undefined || userName === "") {
//         throw new Error("username is empty");
//     }
//     return userName;
// }

// try {
//     console.log(getUserName(""));
//     let myUserName1 = getUserName();
//     console.log(myUserName1);

//     let myUserName2 = getUserName("Ajay");
//     console.log(myUserName2);
// } catch (error) {
//     console.error(error.message);
// }

//defulat

// function defulat(price, tax = 10, discount = 5) {
//   console.log(price+tax-discount)
// }
// defulat(10)



// function greet(name="guest") {
  
//   return `Name:${name}`;


// }
// console.log(greet());
// console.log(greet(null));
// console.log(greet(undefined));
// console.log(greet(""));
// console.log(greet("Ajay"))


// Destructuring Parameters

// function getFullName({ firstName, lastName, city }) {
//     return `Fullname: ${firstName} ${lastName} ${city}`;
// }

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     city: 'Chomu'
// };

// console.log(getFullName(user));

// const fruit = ['banana', 'graps', 'mango' ,'apple'];

// function fruitsFuncation([first, second, third]) {
//     console.log(`${first} ${second} ${third}`);
// }

// fruitsFuncation(fruit);

// const number = [1, 2, 3 ,4,5];

// function numberFuncation([first, second, third]) {
//     console.log(`${first} ${second} ${third}`);
// }

// fruitsFuncation(number);




// function generateTable() {

//     const number = parseInt(prompt("Enter a number"));
//     // console.log(`${number}`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }

// generateTable();



// function generateTable() {
//     const input = prompt("Enter a number");
//     const number = parseInt(input);
    
//     if (isNaN(number) ) {
//         console.log("Invalid input, please enter a valid number.");
//     } else {
//         for (let i = 1; i <= 10; i++) {
//             console.log(`${number} x ${i} = ${number * i}`);
//         }
//     }
// }

// generateTable();







// function getUserData(firstName, lastName, ...otherdetiles) {
//             console.log(`fullname:${firstName} ${lastName} ${otherdetiles}`)
// }
// console.log(getUserData('ajay','yogi' ,'city:chomu'))









// higher order function

// ek funcation funcation ko as a argument leta/accepts  h




// function add(a,b, cb) {
//     let result = a + b;
//     cb(result);
//         // return ()=>console.log(result)

// }



// add(4, 4, val => console.log(val));


// add(2, 4, function (val) {
//     console.log(val);
// });






// let resultFuncation = add(5, 5, () => { });
    
// resultFuncation();


// function applyOperation(a, b, operation) {
//     return operation(a, b);
// }

// const add = (x, y) => x + y;

// console.log(applyOperation(3, 4, add)); 
               

 // function greet(name) { 
 //     return `Namste ${name} `; 
// } 
  
// function greet_name(greet,  name) { 
//     console.log(`${greet(name)} `); 
// } 
  
// greet_name(greet, "Ajay");





// function divide(a, b) {
//     if (b === 0) {
//         throw new Error('Division by zero is not allowed.');
        
//     }
//     return a / b;
    
// }
// try {
    
//     console.log(divide(50,0))
// } catch (error) {
//     console.error(error.message); 
// }

   

// try {
//     errorFuncation();
//   const errorFuncation = function () {
//     console.log('hello')
//    } 
    
// } catch (error) {
//     console.error(error.message); 
// }











// const delay = 2000;

// setTimeout(() => {
//     console.log('done');
// }, delay);




// setTimeout(() => {
//     console.log("hello");
// }, 3000);

// console.log("hello2");







// function changeContent() {
    
//     document.getElementById("myDiv").innerHTML = "Content changed!";
// }

// window.onload = function () {
//     setTimeout(function () {
//         document.getElementById("myDiv").innerHTML = "Content changed!";
          
//       }, 2000)
    
// }




// function displayPerson({ name, age, address }) {
//   console.log(`Name: ${name}, Age: ${age}, City: ${address.city} ${address.state}`);
// }

// const person = {
//   name: "John Doe",
//   age: 30,
//     address: {
//         city: "chomu",
//         state:"Rajasthan"
//   }
// };

// displayPerson(person);




//  function applyOperation(operation) {
//     return operation("hello");
// }

// const add = (name) => name + "Ajay";

// console.log(applyOperation(add));


// function message(greet) {
//     return greet('Namaste:');
// }

// const a = (name) => name+"Ajay"


// console.log(message(a));








// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person)

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//     fullName () {
//         return this.firstName + " " + this.lastName;
    
//     }
    
// };
// console.log(person.fullName())


// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   age:50, eyeColor:"blue"
// }
// console.log(person)
// const x = person;

// x.age = 18;
// x.firstName = "Ajay";
// x.lastName = "Yogi";

// console.log(person)








// function greet(a) {
//     return a('Namste:');
// }

// const message = (name) => name + "Ajay";

// console.log(greet(message));

// function greet(callback) {
//     return callback('Good Morning,');

// }
// const message = (name) => name + 'Ajay';
// const message1 = (name) => name + 'Rahul';
// const message3 = (name) => name + 'Alice';

// console.log(greet(message,message1));
// console.log(greet(message1));
// console.log(greet(message3));

// function greet(...callbacks) {
//     return callbacks.map(callbacks=>callbacks('Good Morning,'));
// }

// const message = (name) => name + 'Ajay';
// const message1 = (name) => name + 'Rahul';
// const message2 = (name) => name + 'Alice';

// console.log(greet(message, message1, message2));






// const nub =[200 ,723 ,100, 400]


// function clacluteCartPrice(nub) {
//     return nub;

// }
// console.log(clacluteCartPrice(nub[1]))





// function getuserdata () {
//     return myuserdata;
// }
// const myuserdata = {
//     name: "Ajay",
//     id:2343

// }
// console.log(myuserdata.name);



// let itemPrice = [250, 400, 300, 200, 100];

// for (const price of itemPrice) {
//     offer = price / 10;
//     totalPrice = price - offer;
//     console.log(totalPrice);
// }


let cart = [];

function addToCart(productName, productPrice) {
  const product = { name: productName, price: productPrice };
  cart.push(product);
  console.log('Cart:', cart);
}

addToCart('Product 1', 29.99);
addToCart('Product 2', 19.99);

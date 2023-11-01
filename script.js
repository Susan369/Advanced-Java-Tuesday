
// Write the destructuring assignment that reads:

// name property 
// years property
//(false if absent)

let user1 ={
    name:"John",
    years:30
}

let { name, years: age, isAdmin = false } = user;
  
  console.log(user);

  //Give the right name:
  //variable with name of plnet
  //variable to store a visitor name

  const ourPlanet = "Mother";
  let currentVisitor = "user";
  
  console.log(ourPlanet);
  console.log(currentVisitor);

  //exersice 3

  let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}
sayHi();

//the answer is Hello, John . because its true, and an alert.

//exersice 4
//one line code
//create an empty object user
//add property name and value
//surname=smith
//change name to Pete
//remove property name from the object

const userA = {};
userA.name = 'John';
userA.surname = 'Smith';
console.log(userA);

userA.name = 'Pete';
console.log(userA);

delete userA.name;
console.log(userA);

//Exercise 5
//change const object
const user = {
    name: "John"
  }
  
  // does it work? no because its a constant
  user.name = "Pete"

  //6
  //sum alaries
  //store in variable
  //if


const sumValues = Object =>Object. values(Object).reduce((a,b) => a + b, O);
console.log(sum);

//7
//ternary operator

let a = 3;
let b = 6;

const result = a + b < 6 ?: "Below" : "Over";
console.log(result);

//8



let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

  
  

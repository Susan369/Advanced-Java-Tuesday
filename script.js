//Write a function
//looks for elements between a and b
//returns an array
// return the new array

function filterRange(arr1, a, b) {
    // added brackets around the expression for better readability
    return arr1.filter(item => (a <= item && item <= b));
  }
let arr1 = [5, 3, 8, 1]
let filtered = filterRange(arr1, 1, 4)

  
  //alert( filtered ); // 3,1 (matching values)
  
  //alert( arr ); // 5,3,8,1 (not modified)

  console.log(filtered)
  console.log(arr1)


  //converts it into an array of names

let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let users = [ john1, pete1, mary1 ];

let names = users.map(item => item.name);

//alert( names ); // John, Pete, Mary
console.log(names)

//Write the function
// getAverageAge(users

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john2 = { name: "John2", age: 25 };
let pete2 = { name: "Pete2", age: 30 };
let mary2 = { name: "Mary2", age: 29 };

let arr2 = [ john2, pete2, mary2 ];

//alert( getAverageAge(arr2) ); // 28
console.log(getAverageAge(arr2))
//----------------------------JavaScript Object Practice Tasks------------------------//

// Task 1: Create and Access Object Properties //

// const car ={
//     brand : "Toyata",
//     model : "camry",
//     year : "2022",
//     color : "blue"
// }

// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);
// console.log(car.color);

//--------------------------------------------------------------------------//

// Task 2: Add, Update, and Delete Properties //

// let  person = {
//     name : "umar",
//     age : "21"
// }

// person.country ="india"
// delete person.name
// person.age ="22"

// console.log(person)

// Task 3: Object with Methods //

// const calculator ={
//   add : function( a,b ){
//     return(a + b)
//   },
//   sub : function( a, b){
//     return( a - b )
//   },
//   mul : function(a,b){
//     return( a * b )
//   }
// };

// console.log(calculator.add(4,2));
// console.log(calculator.sub(4,2))
// console.log(calculator.mul(4,2))

// Task 4: Nested Object Access //

// const student = {
//   name: "Anu",
//   grade: "A",
//   marks: {
//     math: 90,
//     english: 88,
//     science: 92
//   }
// };

// console.log(`Student name = ${student.name}`);
// console.log(`Math Mark = ${student.marks.math}`);
// console.log(`Science Mark= ${student.marks.science}`)

// Task 5: Loop Through Object and Count Properties //

// const laptop = {
//   brand: "HP",
//   processor: "i5",
//   ram: "16GB",
//   storage: "512GB SSD"
// };

// console.log(`Property count : ${Object.keys(laptop).length}`)

// Task 6: Shallow Copy vs Deep Copy


// const student = {
//   name: "John",
//   marks: { math: 90, science: 85 }
// };

// const copieddtudent = Object.assign({}, student)
// copieddtudent.marks.math = 100;
// console.log(student)
// console.log(copieddtudent);

// Task 7: Merge Multiple Objects //

// const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };

// const combinedObj = Object.assign({}, obj1, obj2, obj3);
// console.log(combinedObj);

// Task 8: Freeze and Modify //

// const setting = {
//     Name : "Umar",
//     Age : "21"
// };
// Object.freeze(setting)
// setting.address = "Tirunelveli";
// setting.age = "22"
// delete setting.Name
// console.log(setting)

// Task 9: Object Destructuring

// const user = {
//   name: "Ravi",
//   age: 28,
//   address: {
//     city: "Chennai",
//     country: "India"
//   }
// };

// const {
//   name: userName,
//   age: userAge,
//   address: { city, country }
// } = user;

// console.log("Name:", userName);
// console.log("Age:", userAge);
// console.log("City:", city);
// console.log("Country:", country);

//----------------------------------------------Task 10-------------------------------------------------//

// function countProperties(obj){
//   let count = 0;

//   for (let key in obj) {
//       count++; 
//     if (typeof obj[key] === "object"){
//         count+=countProperties(obj[key])
//     }
//     }
// return count;
// }

// const obj = {
//   name: "Kumar",
//   details: {
//     age: 30,
//     contact: { phone: "12345", email: "test@mail.com" }
//   }
// };

// console.log("Total Properties:",countProperties(obj)) 

// Output: Total Properties: 6










//------------------------------javaScript array tasks------------------------------//
// 🧩 Task 1: Sum of Array Elements //

// let nums = [5, 10, 15, 20];
// let sum = 0

// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
// }
//     console.log(sum)

//---------------------------------------------------------------------------------------------//

// 🧩 Task 2: Find Maximum and Minimum //

// let arr = [12, 7, 45, 22, 9];

// let max = 0
// let min =Infinity

// for (let i = 0; i < arr.length; i++) {
//     if (max<arr[i]){
//         max=arr[i]
//     }   

//     else if (min>arr[i]){
//         min=arr[i]
//     }
//  }
// console.log(`Max number : ${max}`);
// console.log(`min number : ${min}`);

//----------------------------------------------------------------------------------------//

//🧩 Task 3: Reverse an Array (without using reverse())

// let arr = [5, 6, 7, 8, 9];
// let len = arr.length-1

// for (let j = len;j>=0;j--){
//       char=arr[j]
//       console.log(char);
// }

//=======================================================================================//

// 🧩 Task 4: Remove Duplicates from Array //

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let len = arr.length-1
// let num = [];

// for (i=0;i<=len;i++){
//     if(!num.includes (arr[i])){
//         num.push(arr[i])
//     }
// }
// console.log(num)

//=======================================================================================//

// 🧩 Task 5: Count Occurrences of Each Element //

// let arr = ["apple", "banana", "apple", "cherry", "banana", "apple"];
// let apple_count = 0;
// let banana_count = 0;
// let cherry_count = 0;

// for(let i =0;i<arr.length;i++){
// if(arr[i]=="apple"){
//     apple_count++
// }
// else if (arr[i]=="banana"){
//     banana_count++
// }
// else if (arr[i]=="cherry"){
//     cherry_count++
// }
// }

//  console.log(`apple = ${apple_count}`); 
//  console.log(`banana = ${banana_count}`);
//  console.log(`cherry = ${cherry_count}`);    

//======================================================================================/

// 🧩 Task 6: Filter Even Numbers //

// let arr = [10, 15, 20, 25, 30];
// let even = []

// for(let i =0;i<arr.length;i++){
//     if (arr[i]%2== 0){
//         even.push(arr[i])
//     }
// }

// console.log(even)

//======================================================================================//

// 🧩 Task 7: Merge Two Arrays Without Duplicates //

// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let join =a.concat(b)
// let c =[];
// for (let i=0;i<join.length;i++){
//     if(!c.includes (join[i])){
//         c.push(join[i])
//     }
// }
// console.log(c);

// 🧩 Task 8: Sort Numbers Ascending & Descending

// let numbers = [42, 7, 19, 3, 25];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(`Assending order :${numbers}`);
// rev=numbers.reverse()
// console.log(`desending order :${rev}`);

// 🧩 Task 9: Find Second Largest Number

// let arr = [10, 25, 5, 30, 20];let marks = [75, 80, 90, 85];
// let calculate = marks.reduce((a, b) => a + b, 0);
// let Average = calculate/4;
// console.log(Average);

// arr.sort(function (a, b) {
//     return a - b;
// });
// second =arr
// find = second.length-2
// console.log(second[find]);

//====================================================================================//

// 🧩 Task 10: Flatten a Nested Array
// web3 flat method refer

// let arr = [1, [2, [3, 4]], 5];
// let flattedarray = arr.flat(2);
// console.log(flattedarray)

//====================================================================================//
// 🧩 Task 11: Square Each Number (Using map())

// let nums = [2, 4, 6, 8];
// let square = nums.map(num => num*num);
// console.log(square)

//=====================================================================================//

// 🧩 Task 12: Filter Words by Length (Using filter())

// let words = ["sun", "planet", "moon", "star", "galaxy"];
// let fill = words.filter(words => words.length > 4);
// console.log(fill);

//=====================================================================================//

// 🧩 Task 13: Sum of Numbers (Using reduce())

// const numbers = [5, 10, 15, 20];

// const sum = numbers.reduce((a, b) => a + b, 0);
// console.log(sum); 

//🧩 Task 14: Find First Negative Number (Using find())

// let arr = [4, 8, -3, 9, -6];

// let neg = arr.find(arr => arr<0);
// console.log(neg)

//===========================================================================================//

// 🧩 Task 15: Sort Objects by Age

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 30 }
// ];

// users.sort(function(a,b){
//     return a.age - b.age
// })

// console.log(users)

//======================================================================================//

// 🧩 Task 16: Count Even and Odd Numbers (Using reduce())

// let nums = [1, 2, 3, 4, 5, 6];
// even_count = 0;
// odd_count = 0;
// let even = nums.reduce((a,b)=>{
//     if (b%2==0){
//         even_count++
//     }
//     else{
//         odd_count++
//     }
// },0);

// console.log(`Even Number : ${even_count}`);
// console.log(`Odd Number : ${odd_count}`);

//==============================================================================//

// 🧩 Task 17: Remove Falsy Values (Using filter())

// let arr = [0, "hello", false, 42, "", null, "JS", undefined];
// let fill = arr.filter(Boolean)
// console.log(fill)

// 🧩 Task 18: Capitalize Each Word (Using map()) //
//refered by chat gpt

// let words = ["apple", "banana", "cherry"];
// let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// console.log(capitalized);

//==============================================================================/

// 🧩 Task 20: Find Average Marks (Using reduce())

// let marks = [75, 80, 90, 85];
// let calculate = marks.reduce((a, b) => a + b, 0);
// let Average = calculate/4;
// console.log(Average);

//==================================================================================//



//Mini Project Assignment – JS Arrays

//self task

// let students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 58 },
//   { name: "Charlie", marks: 92 },
//   { name: "David", marks: 37 },
//   { name: "Eva", marks: 76 }
// ];

// console.log("All Students:");
// students.forEach(student => {
//   console.log(`${student.name} - ${student.marks}`);
// });

// let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
// let averageMarks = totalMarks / students.length;

// console.log(`Total Marks: ${totalMarks}`);
// console.log(`Average Marks: ${averageMarks.toFixed(2)}`);

// let highest = students.reduce((max, student) => (student.marks > max.marks ? student : max));
// let lowest = students.reduce((min, student) => (student.marks < min.marks ? student : min));

// console.log(`\nHighest: ${highest.name} (${highest.marks})`);
// console.log(`Lowest: ${lowest.name} (${lowest.marks})`);

// let passingStudents = students.filter(student => student.marks >= 40);
// console.log("\nStudents Who Passed:");
// passingStudents.forEach(s => console.log(`${s.name} - ${s.marks}`));

// let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
// console.log("\nStudents Sorted by Marks (High → Low):");
// sortedStudents.forEach(s => console.log(`${s.name} - ${s.marks}`));

// let top3 = sortedStudents.slice(0, 3);
// console.log("\nTop 3 Performers:");
// top3.forEach((s, i) => console.log(`${i + 1}. ${s.name} - ${s.marks}`));

// let addMore = false; // change to true to activate prompt mode
// if (addMore) {
//   let count = prompt("How many students do you want to add?");
//   for (let i = 0; i < count; i++) {
//     let name = prompt(`Enter name of student ${i + 1}:`);
//     let marks = parseInt(prompt(`Enter marks for ${name}:`));
//     students.push({ name, marks });
//   }
// }
// let passPercentage = (passingStudents.length / students.length) * 100;
// console.log(`\nPass Percentage: ${passPercentage.toFixed(2)}%`);

// console.log("\nGrades:");
// students.forEach(student => {
//   let grade;
//   if (student.marks >= 90) grade = "A";
//   else if (student.marks >= 75) grade = "B";
//   else if (student.marks >= 50) grade = "C";
//   else grade = "Fail";
//   console.log(`${student.name} - ${student.marks} (${grade})`);
// });












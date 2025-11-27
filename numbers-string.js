//---------------------------------Task 1----------------------------------//
// Given a decimal number, display its rounded value using JavaScript’s Math methods.

/* let num = 4.6789;
console.log("Original Number:",num);
console.log("Rounded (2 decimal places):",num.toFixed(2));
console.log("Rounded (nearest):",Math.round(num)); */

//Self coded

//---------------------------------Task 2----------------------------------//
//  Write a program that generates a random integer between two given numbers (inclusive).

/* let min = Number(prompt("Enter the minimum number:"));
let max = Number(prompt("Enter the maximum number:"));
let C = Math.random() * (max - min + 1) + min
console.log(`Random number between ${min} and ${max}:`,Math.round(C))
 */

// Self-coded 

//---------------------------------Task 3----------------------------------//
//  Write a JavaScript program to find the sum of all digits in a given number.
//  The number may be positive or negative.

/* let num = -1234;
function sum(){
    // let pnum = -(num) * -1;  // Onetype 
    let pnum = Math.abs(num)    // Onetype
    sumNumber = 0;
    str = String(pnum);
    for (i=0; i<str.length; i++){
        sumNumber += parseInt(str[i])
    }
    return sumNumber;
    
}
console.log(sum()) */

// Self coded
//---------------------------------Task 4----------------------------------//
// Write a JavaScript program that takes a number and formats it as currency (for example, in Indian Rupees).


/* let amount = 1234567.89;
console.log('₹' + amount.toLocaleString('en-IN'));
 */

// Self-coded 
//---------------------------------Task 5----------------------------------//

/* // let p = 5000;
// let r = 5;
// let t = 2;
let p = Number(prompt("Enter the Principal Amount :"));
let r = Number(prompt("Enter the Rate of Interest :"));
let t = Number(prompt("Enter the Time duration in years :"));
//  let a = p * (1 + r/100)^t
 let a = p * Math.pow((1 + r / 100), t);
 
 let c = a - p
 
console.log("Compound Interest:",c) 
console.log("Total Amount:",a) */

//Self-coded 
//---------------------------------Task 6----------------------------------//
// Write a program that converts all letters in a string to uppercase and also prints the reversed version of the string.

/* let word = "developer umar";
let nstr = "";
let ustr = word.toUpperCase()
for (let i=word.length-1; i>=0; i--){
    nstr += word[i]
  }
  console.log(ustr)
   console.log(nstr) */

// Self-coded 
//---------------------------------Task 7----------------------------------//
//  Write a program that checks whether a given string reads the same backward and forward (ignoring case and spaces).

/* let str = "Race car";
str = str.toLowerCase().replace(/\s+/g, "");
let nstr = ""

for (i=str.length-1; i>=0; i--){
    nstr+=str[i]
}
console.log("Original:", str);
console.log("Reversed:", nstr);

if (str == nstr){
    console.log("True")
}else{
    console.log("False")
} */


// Self-coded 
//---------------------------------Task 8----------------------------------//
//  Write a JavaScript program to count how many times a specific word appears in a sentence.

/* let sentence = "JavaScript is fun. I love JavaScript programming.";
let word = "JavaScript";

let count = sentence.split(word).length - 1;

console.log(`${word} appears ${count} times.`); */

// Self-coded
//---------------------------------Task 9----------------------------------//
//  Write a JavaScript program that capitalizes the first letter of every word in a given sentence.

/* let sentence = "welcome to javascript programming";
let nstr = sentence.split(" ");
for (i=0; i<nstr.length; i++){
     nstr[i] = nstr[i].charAt(0).toUpperCase() + nstr[i].slice(1);
}
let sentence1 = nstr.join(" ")
console.log(sentence1) */

// Self-coded 
//---------------------------------Task 10---------------------------------//
// Write a JavaScript program that removes duplicate characters from a string.

/* let str = "umar developer"
let nstr = ""
for (i=0; i<str.length; i++){
    if (!nstr.includes(str[i])){
        nstr+= str[i]
    }
}
console.log(nstr) */

// Self-coded 
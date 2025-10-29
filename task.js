//Write a function greet(name) that takes a name and prints:

// function greet(name){
//     return `Hello ${name}! Welcome to JavaScript`;
// }

// console.log(greet(i))

//2. Sum of Two Numbers

// let num1 = Number(prompt("a = "))
// let num2 = Number(prompt("b = "))

// function add(a, b) {
//     return(a+b)
// }
// let result=add(num1,num2)
// console.log(result)

//3. Default Parameters


// let num1 = Number(prompt("a = "))


// function add(a, b=2) {
//     return(a*b)
// }
// let result=add(num1)
// console.log(result)

//🟡 Medium (Intermediate Level)

//4. Find Maximum of Three Numbers


// let a=(prompt("enter number a = "))
// let b=(prompt("enter number b = "))
// let c=(prompt("enter number c = "))

// function findmax(a,b,c){
//     if (a > b && a > c)
//         return(`${a} is greater number`) 
//     else if (b > a && b > c)
//         return(`${b} is greater number`)
//     else
//         return(`${c} is greater number`)
// }

// result=findmax(a,b,c)

// console.log(result)


//5. Count Words in a Sentence

// i = (prompt("enter your multi sentence word"))

// function countwords(sentence){
//     word= sentence.split(' ')
//     return word.length
// }

// console.log (countwords(i))

// 6. Check Even or Odd

// num = Number(prompt("Enter your number"))

// let iseven = (number) =>{
//     if (number%2==0)
//         return(true)
//     else
//         return(false)
// }

// console.log(iseven(num))

// 7. Calculate Factorial


// function factorial(a){
//     let b=1
//     for (let i=a;i > 0; i--){
//         b=b*i
//     }
//     return b;
// }
// console.log (factorial(5))

// 8. Count Vowels in a String

// let vowel = []
// function countVowels(char) {
//     for (let i = 0; i <= char.length; i++) {
//         if (char[i] == "a" || char[i] == "A" || char[i] == "e" || char[i] == "E" || char[i] == "i" || char[i] == "I" || char[i] == "o" || char[i] == "O" || char[i] == "u" || char[i] == "U") {
//             vowel.push(" ")
//         }
//     }
// }
// countVowels("JavaScript");
// console.log(vowel.length)

// 9. Create a function to check prime number

// let prime =(prompt("enter your number : "))

// function inprime(num){
//     if (num == 2 || num == 3 || num == 5)
//         return(true)
//     else if (num%2==0 || num%3==0|| num%5==0)
//         return(false)
//     else
//         return(true)
// }

// // console.log(inprime(prime))

//10. Closure Counter

// function createCounter() {
//   let count = 0; 
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 


// 🎯 Mini Project 1 – Simple Calculator

// let a = Number(prompt("Num 1"));
// let b = Number(prompt("Num 2"));
// let operator = prompt("Enter operator (+, -, x, /)");

// function Calculator(num1, num2, op) {
//   if (op == "+") {
//     return num1 + num2;
//   } else if (op == "-") {
//     return num1 - num2;
//   } else if (op == "x" || op == "*") {
//     return num1 * num2;
//   } else if (op == "/") {
//     return num1 / num2;
//   } else {
//     return "Invalid operator";
//   }
// }

// console.log(Calculator(a, b, operator));


// -------------------------------Student Grade Evaluator-02----------------

// Concepts Covered:
// Function declaration, return values, conditional statements, arrow functions.
// Objective:
// Create a function that takes marks and returns the student’s grade.
// Requirements:
// Function getGrade(marks) returns a grade based on score.

// Logic:
// >=90: A
// >=80: B
// >=70: C
// >=60: D
// Else: Fail

// let ip=Number(prompt("Enter mark:"))
// function getGrade(marks){
//     if (isNaN (marks)){
//         return "Enter Valid Number!"
//     }else if (marks <= 100 && marks >= 90){
//         return "A"
//     }else if(marks <= 89 && marks >= 80){
//         return "B"
//     }else if(marks <= 79 && marks >= 70){
//         return "C"
//     }else if(marks <= 69 && marks >= 60){
//         return "D"
//     }else{
//         return "FAIL"
//     }
// }
// console.log(getGrade(ip))

// Refferd by -----> Self Coded 

// ========================3.Random Quote Generator=======================
// Arrow functions, arrays, random number generation, callback functions.
// Objective:
// Display a random motivational quote each time the user clicks a button.
// Requirements:
// 1. Store 5–10 quotes in an array.
// 2. Create a function getRandomQuote() that returns a random quote.
// 3. Display the result on the page (in console or innerHTML).

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>js</title>
// </head>

// <body>
//     <center>
//         <h1>Random Quote Generator created By BaMu</h1>
//         <p id="quoteDisplay"></p>
//         <button id="quoteButton">Get Random Quote</button>
//     </center>
//     <script>
//         let quotes = [
//             "Every scar tells a story — not of pain, but of survival. -BaMu",
//             "Silence speaks louder when your heart knows the truth. -BaMu",
//             "Rise, even when the world thinks you fell. -BaMu",
//             "Some journeys begin with heartbreak but end with destiny. -BaMu",
//             "Your path is yours — even if it moves slow, it still moves. -BaMu",
//             "The fire inside you will always burn louder than their doubts. -BaMu",
//             "Feel the storm, but never forget you are the thunder. -BaMu",
//             "Don’t stop until your dream becomes your life. -BaMu",
//             "Broken moments create unbreakable souls. -BaMu",
//             "One day, every struggle will make sense — trust your journey. -BaMu"
//         ];

//         document.getElementById("quoteButton").addEventListener("click", function () {
//             let randomIndex = Math.floor(Math.random() * quotes.length);
//             document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
//         });
//     </script>
// </body>

// </html>

// Refferd by -----> used Google for syntax help

// ========================4.Temperature Converter=======================

// Functions, parameters, return values, conditionals, arrow functions (optional)
// Objective:
// Build a temperature converter that converts between Celsius and Fahrenheit.
// Requirements:
    // 1.Create a function convertTemperature(value, scale)
// 2.If scale is "C", convert to Fahrenheit → (value * 9/5) + 32
// 3.If scale is "F", convert to Celsius → (value - 32) * 5/9
// 4.Return the converted value.

/* function convertTemperature(value, scale){
    if (scale == "C"){
       let f = (value * 9/5) + 32
       return Temperature in Fahrenheit: ${f}°F
    }else if(scale == "F"){
         let c = (value - 32) * 5/9
         return Temperature in Celsius: ${c}°C
    }else{
        return "Enter a Valid inputs"
    }
}
console.log(convertTemperature(25, "C"))
console.log(convertTemperature(100, "F")) */

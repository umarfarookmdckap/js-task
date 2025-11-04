//Task 1: Round a Decimal Number//

// let num = 4.6789;

// console.log(num)
// console.log(Math.round(num))
// console.log(num.toFixed(2))



//Task 2: Generate a Random Number between Two Values

// let randomnum= Math.floor(Math.random()*10+10).toFixed(0)

// console.log(randomnum)

// `Task 3: Sum of Digits of a Number`

// let num = -1234;

// num = Math.abs(num);

// let sum = num
//   .toString()
//   .split('')
//   .map(Number)
//   .reduce((a, b) => a + b);

// console.log("Sum of digits:", sum);


// Task 4: Format a Number as Currency

// let amount = 1234567.89;


// let formattedAmount = amount.toLocaleString('en-IN');

// console.log("Formatted amount:", formattedAmount);

// Task 5: Calculate Compound Interest


// let P = 10000; 
// let r = 8;     
// let t = 2;    
// let A = P * Math.pow((1 + r / 100), t);
// let CI = A - P;

// console.log("Compound Interest:", CI.toFixed(2));

// Task 6: Convert Case and Reverse a String

// let word = "Developer"

// let uppercase = word.toUpperCase();
// let reverse = word.split("").reverse().join("");

// console.log(uppercase)
// console.log(reverse)

// Task 7: Check for Palindrome

// let input = "Race car"
// let change = input.toLowerCase().replace(/\s+/g, "");

// let reverse = change.split("").reverse().join("");

// if (change == reverse){
//   console.log(true)
// }

// else {
//   console.log(false)
// }

// Task 8: Count the Occurrences of a Word

// let sentence = "JavaScript is fun. I love JavaScript programming.";
// let c = sentence.toLocaleLowerCase().split(" ");
// let word = "javascript"
// let d = word.toLocaleLowerCase();
// let count=0;


// for(let i=0;i<c.length;i++){
//   if(c[i] == d){
//     count++;
//   }
// };

//     console.log(`${word} repeat ${count} times`)

// Task 9: Capitalize the First Letter of Each Word


// let sentence = "welcome to javascript programming";

// function capitalizeWords(str) {
//   return str
//     .split(" ") 
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
//     .join(" "); 
// }


// let result = capitalizeWords(sentence);
// console.log(result);


// Task : 10. Remove Duplicate Characters

// let text = "programming";

// let uniqueText = [...new Set(text)].join("");

// console.log("After removing duplicates:", uniqueText);




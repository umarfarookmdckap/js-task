/* let str ="Bamu"
count = 0
// for (i=0; i<str; i++){
//     count+=1
// }
for (let b of str){
    count+=1
}

 console.log(str)
console.log(count)
*/




3.

/*
let str ="programming is fun"
count = 0
// let vowel = "AEIOUaeiou"
for (i=0; i<str.length; i++){
    let ii = str[i];
    //  if (vowel.includes(ii)){
    if (ii == 'a' || ii == 'e' || ii == 'i' || ii == 'o' || ii == 'u'){
    count+=1
    console.log(count)
    }else{
        console.log("No Vowels in the line")
    }
}

console.log(str)
console.log(`The vowels count is ${count}`)
*/

//4. Use a loop to reverse the string "javascript" and store the result in a new string.

// let str = "javascript"
// let ns = ""
// for (let i = str.length-1; i>=0; i--){
//      ns = str[i]
//     console.log(ns)
// }

//-------------------------------------------------------------------------------
// 5. Uppercase Each Character:
// Loop through the string "loop" and create a new string with all letters in uppercase (without using .toUpperCase() directly on the whole string).

/* let str = "javascript"
let ns = ""

for (i=0; i<str.length; i++){
    let charcode = str.charCodeAt(i)
    if (charcode >= 97 && charcode <= 122) {
    charcode=charcode-32
    }
      ns += String.fromCharCode(charcode);
   
}
 console.log(ns) */

 // -------------------------------------------------------------------------------
// Find the First Repeated Character:
// Write a loop that returns the first repeated character in "abacddbec".

/*  function repeat(str){
    for (i=0; i<=str.length; i++){
        ch = str[i]
        if(ch === ch){
            return ch;
        }
    }
}
console.log(repeat("abbacddbec")) 
 */

// -------------------------------------------------------------------------------
// Sum of Elements:
// Use a loop to calculate the sum of all numbers in the array [1, 2, 3, 4, 5].

/* let a =  [1, 2, 3, 4, 5]
let sum = 0 ;
for (i=0; i<a.length; i++){
   sum+=a[i]
}
 console.log(sum)
 */ 

// -------------------------------------------------------------------------------
// Find the Largest Number:
// Use a loop to find the largest number in the array [10, 3, 7, 20, 15].

/* let arr = [10, 3, 7, 20, 15]
let big=arr[0]
for (i=0; i<arr.length; i++){
    if(arr[i]>big){
        big=arr[i]
    }
 
}
console.log(big) */

// -------------------------------------------------------------------------------
// Double Each Number:
// Create a new array where each element in [2, 4, 6, 8] is doubled.

/* let ar = [2,4,6,8]
let na=[]
for (i=0; i<ar.length; i++){
    if (ar[i]){
        na.push(ar[i]**2)
    }
}
console.log(na)
 */

// -------------------------------------------------------------------------------
// Count Even Numbers:
// Count how many even numbers are in [1, 2, 3, 4, 5, 6].

/* let arr = [1, 2, 3, 4, 5, 6]
let ar = 0
for (i=0;i<arr.length;i++){
    if (arr[i]%2==0){
        ar+=1
    }
}
console.log(ar) */

// -------------------------------------------------------------------------------
// Concatenate Array Elements into a String:Loop through ["I", "love", "JS"] and combine them into one string: "I love JS".
/* let arr1 = ["I", "love", "JS"]
let str = ""
// let arr2 = "I love JS"
for (i=0;i<arr1.length;i++){
   str += arr1[i]
   if(i < arr1.length-1){
       str+=" "
   }
}
console.log(`"${str}"`) */

// -------------------------------------------------------------------------------
// Reverse Words:
// Given "hello world", use loops to reverse each word individually → "olleh dlrow"

/* let str = "hello world"
let str2 = str.split(" ") 
let nstr = ""
for (let i=0;i<str2.length;i++){
    // nstr = str.split(" ")
    let rstr = str2[i].split("").reverse().join("");
    nstr += rstr;
    if (i < str2.length - 1) {
        nstr += " ";
    }
}
console.log(nstr) */

// -------------------------------------------------------------------------------
// Find Longest Word:
// Loop through ["apple", "banana", "kiwi", "watermelon"] and find the longest word.

/* let arr = ["apple", "banana", "kiwi", "watermelon"]
let str = ""
for (i=0; i<arr.length;i++){
    if (arr[i].length > str.length){
        str = arr[i]
    }
}
console.log(str) */

// ==================Additional==============
// -----------------------------1--------------------
/*
let a = ["bala","bamu","bagn"]
// Push
let b=12;
if (b%2==0){
    a.push("even")
}else{
    a.push("odd")
}
console.log(a)
// POP
a.pop()
console.log(a)
// SHIFT
a.shift()
console.log(a)
// UNSHIFT
a.unshift("Lemon");
console.log(a)
// SLICE
let bala = a.slice(1);
a.push(bala)
console.log(a)
// SPLICE
bala  = a.splice(2, 0, "Lemon", "Kiwi");
console.log(a)
*/

// -----------------------------2--------------------
/*
let up = ["boat", "boult", "sony"];
let mark = 82;

// PUSH 
if (mark > 30) {
    up.push("pass");
} else {
    up.push("Fail");
}
console.log("push:", up);

// POP 
up.pop();
console.log("pop:", up);

// SHIFT
up.shift();
console.log("shift:", up);

// UNSHIFT 
up.unshift("Skullcandy");
console.log("unshift:", up);

// SLICE
let newpod = up.slice(0, 2);
up.push(newpod);
console.log("slice:", up);

// SPLICE 
up.splice(1, 0, "mustang", "amzonBasis");
console.log("splice:", up);
*/
//print all number 1-50,but skip the multiple of 5

// let i = 0;
// while (i <= 50) {
//     i++;
//     if (i%5==0)continue;
//     console.log(i)
// }

// 7 multiflication table

// let i=7
// for (j=1;j <= 10; j++){
// console.log(`${i} x ${j} = ${i*j}`)}

//find sum of odd number

// let i=2;
// let sum=0;
// while (i <= 100) {
//   if (i % 2 !== 0) {
//     sum += i;
//     console.log(i);
//   }
//   i++;
// }
// console.log("Sum of odd numbers:", sum);






//switch

// let day = parseInt (prompt("enter your month : "));
// let month;

//  switch(day){
//      case 1:
//      month = "january";
//      break;
     
//      case 2:
//      month = "february";
//      break;
     
//      case 3:
//      month = "march";
//      break;
     
//      case 4:
//      month = "april";
//      break;
     
//      case 5:
//      month = "may";
//      break;
     
//      case 6:
//      month = "june";
//      break;
     
//      case 7:
//      month = "july";
//      break;
     
//      case 8:
//      month = "agust";
//      break;
     
//      case 9:
//      month = "september";
//      break;
     
//      case 10:
//      month = "october";
//      break;
     
//      case 11:
//      month = "november";
//      break;
     
//      case 12:
//      month = "december";
//      break;
     
//      default:
//      month = "invalid";
//  }
//  console.log (month);

// let n = 4;
// let pattern = "";

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         pattern += "  ";
//     }
//     for(let k = 1; k <= 2 * i - 1; k++) {
//         pattern += "* ";
//     }
//     pattern += "\n";
// }

// console.log(pattern);


// const num=18;
// attempt=0;
// while(true){
// attempt++
// let sum= parseInt(prompt("guess the number:"));

// if(num===sum){
//     console.log(`Your Guess is correct at your ${attempt} attempt`) 
//     break;
// }
// else if(18<sum){
//         console.log("Your Guess is high")
// }
// else{
//         console.log("Your Guess is low")
// }
// }

                          // bala anna task //


//                   //even odd checking //

// let i = (prompt("enter your input = "))

// if (i%2==0){
//     console.log("its an even number")
// }

// else {
//     console.log("its an odd number")
// }


//   greater number checking //

// let a = Number(prompt("Enter a = "));
// let b = Number(prompt("Enter b = "));
// let c = Number(prompt("Enter c = "));

// if(a > b && a > c)  {
//     console.log("a is greater")
// }

// else if(a < b && b > c ){
//     console.log("b is greater")
// }

// else if(a < c && c > b ){
//     console.log("c is greater")
// }

// else {
//     console.log("olunga output kudula naie mula")
// }

//            divisible by 8 //

// let i = (prompt("enter your input = "))

// if (i%8==0){
//     console.log("its divisible by 8")
// }

// else {
//     console.log("its not divisible by 8")
// }

// check divisible by both 3 and 5


// let i = (prompt("enter your input = "))

// if (i%3==0 && i%5==0){
//     console.log("its divisible by both 3 and 5")
// }

// else if (i%3!==0 && i%5==0){
//     console.log("its divisible by 5 not 3")
// }

// else if (i%3==0 && i%5!==0){
//     console.log("its divisible by 3 not 5")
// }

// else {
//     console.log("its neither divisible by 3 nor divisible 5")
// }

// / get 5 number as input //

// let a=Number((prompt("enter a :")))
// let b=Number((prompt("enter b :")))
// let c=Number((prompt("enter c :")))
// let d=Number((prompt("enter d :")))
// let e=Number((prompt("enter e :")))
// let calculate =(a+b-((c*d)/e))

// console.log(calculate) 

// odd even checker//
// let n=(prompt("enter a value = "))

// let n=(prompt("enter a value = "))

// for(let i=0;i<=n;i++){
//     if(i%2==0){
//         console.log(`${i} even`)
//     }
//     else{
//         console.log(`${i} odd`)let n=(prompt("enter a value = "))

// for(let i=1;i<=n;i++){
//     if (i%5==0 && i%3==0){
//         console.log("fizzbuzz")
//     }
//     else if (i%5==0){
//         console.log( "buzz")
//     }
    
//     else if (i%3==0){
//         console.log("fizz")
//     }
    
//     else {
//         console.log(i)
//     }
// }
//     }
// }

// fizz bizz //

// array = []
       
// for(let i=1;i<=n;i++){
//     if (i%5==0 && i%3==0){
//         array.push("fizzbuzz")
//     }
//     else if (i%5==0){
//         array.push( "buzz")
//     }
    
//     else if (i%3==0){
//         array.push("fizz")
//     } 
//     else {                                               
//         array.push(i)                                               
//     }
// }         

// console.log(array)                          


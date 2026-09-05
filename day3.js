//(((loops)))
// Loops allow you to repeat code multiple times without writing it again and again.
// JavaScript has mainly 3 types of loops:

//1. for loop

//Used when you know how many times you want to repeat something.
//syntax:
//for (initialization; condition; increment/decrement) {
  // code to repeat
//}

//2.while loop
//Used when you don’t know how many times the loop will run.
//Runs as long as the condition is true.
//stntax:
//while (condition) {
  // repeat code
//}

//3.do...while loop
//This loop runs at least one time, even if condition is false.
//syntax:
//do {
  // code to repeat
//} while (condition);


 //⭐ Bonus: Break & Continue in Loops

//✔ continue → skips the current iteration
//for (let i = 1; i <= 5; i++) {
  //if (i === 3) continue;
 // console.log(i); }

 //✔ break → stops the entire loop
 //for (let i = 1; i <= 5; i++) {
 // if (i === 3) break;
 // console.log(i);  }

//question related to loops
//1️⃣ Print numbers from 1 to 10

// for (let i=1 ; i <= 10 ; i++){
//     console.log(i);
// }

//2️⃣ Print even numbers from 1 to 20

// for (let i=1 ; i <= 20 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//3️⃣ Print table of 5

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }


//4️⃣ Sum of numbers from 1 to 100
// let sum = 0;
// let i=1;
// while (i<=10){
//   sum += i;
//   i++;
// }
//   console.log("sum is " + sum)

//5️⃣ Factorial of a number

// let num =5;
// let facto = 1;

// for(let i=1 ; i<=5 ; i++){
//   facto *= i;
// }

// console.log("factorial is " + facto )

//6️⃣ Reverse counting 10 to 1
// for (let i=10 ; i>=1 ; i--){
//  console.log(i);
// }

//7️⃣Print pattern using loops
// for (let i=1 ; i<=4 ; i++){
//   let pattern = "";
//   for(let j=1 ; j<=i ; j++){
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// for(let count=1; count<=5; count++){
//   console.log("monika");
// }

// let sum = 0;
// for(let i=1; i<=5; i++){
//   sum+=i;
// }
// console.log(sum)
// let i=1;
// while(i<=5){
//     console.log("i", i);
//     i++;
// }

// let j=20;
// do{
//   console.log("monika")
//   j++
// }while(j<=10);

// let str = "javascript";
// let size = 0;
// for(let val of str){
//   console.log("val",val)
//   size++;

// }
// console.log(size);


// let student= {
//   name:"monika",
//   age:23,
//   cgpa:6,
//   isPass:true
// };
// for (let i in student){
//   console.log(i , student[i]);
// }

// for(let i=0; i<=100; i++){
//    if(i%2 !== 0){
//      console.log(i)
//    }
   
// }


// let userNum =prompt("guss the number");
// for (let num=70; userNum!=num;){
//   if(userNum<num){
//     userNum = prompt("number is less you guss")
//   }else if(userNum>num){
//      userNum = prompt("number is greater you guss")
//   }
// }
//   console.log("corect number")

// for(let i=10; i>=1; i--){
//   console.log(i)
// }

// for(let i=1; i<=20; i++){
//    if(i%2===0){
//     console.log(i)
//    }
  
// }

// for(let i=1; i<=20; i++){
//    if(i%2!==0){
//     console.log(i)
//    }
  
// }


// let sum = 0;
// for(let i=1; i<=100; i++){
//   sum += i
// }

// console.log(sum);
// let num = 5

// for(let i=1 ; i<=10 ; i++){
 
//   console.log("5 *",i , "=",num*i)
// }


// let num = 1

// for(let i=1 ; i<=5 ; i++){
//  num = num*i
  
// }
// console.log(num)

// for(let i=1; i<=50;i++){
//   if(i%3===0){
//     console.log(i)
//   }
  
// }

let num = Number(prompt("Enter a number: "));
let isPrime = true;
if(num<=1){
  isPrime =false;
}
for(let i=2;i<num;i++){
   if(num%i ===0){
    isPrime = false;
    break;
   }
}
if(isPrime){
  console.log(num + "is Prime number")
}else{
  console.log(num + "is not Prime number")
}
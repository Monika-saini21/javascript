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

// 🟢 Beginner Level

//.. 1.  1 se 10 tak numbers print karo.

// for (let i=1; i<=10; i++){
//   console.log(i)
// }

// 2.10 se 1 tak reverse numbers print karo.

//  for (let i=10; i>=1; i--){
//   console.log(i)
//   }

//3. 1 se 100 tak numbers ka sum find karo.
// let sum = 0;
// for (let i=1; i<=100; i++){
//   sum = sum+i
 
// }
// console.log(sum)

// 4.Kisi number ka table print karo.
// Example: 5 → 5, 10, 15 ... 50

// let mult = 12;
// for (let i=1 ; i<=10 ; i++){
 
//   console.log("12 *" ,i, "=" ,mult*i);
// }

// 5.  1 se 50 tak even numbers print karo.

// for (let i=1 ; i<=50 ; i++){
//     if(i%2 === 0){
//       console.log(i);
//     }
// }

// 6. 1 se 50 tak odd numbers print karo.

// for (let i=1 ; i<=50 ; i++){
//     if(i%2 !== 0){
//       console.log(i);
//     }
// }

// 7.  1 se 100 tak 3 ke multiples print karo.


// for (let i=1 ; i<=100 ; i++){
//   if(i%3===0){
//     console.log(i)
//   }
// }

// 8. Kisi number ka factorial find karo.
// Example: 5 → 120

// let fact = 1;
// for (let i=1; i<=4; i++){
//  fact=i*fact

// }
// console.log(fact)

// 9. 1 se 100 tak numbers mein se 5 se divisible numbers print karo.

// for (let i=1; i<=100; i++){
//   if(i%5 === 0){
//     console.log(i)
//   }
// }

// 10.  1 se 100 tak numbers ka sum find karo jo even hain.
// let sum = 0;
// for (let i=1; i<=100; i++){
//   if(i%2 === 0){
//     sum += i;
    
//   }
// }
// console.log(sum)

// 11. . 1 se 20 tak numbers print karo, lekin sirf 4 ke multiples.

// for(let i=4; i<=20; i +=4){
//   console.log(i);
// }

// 12. 1 se 50 tak numbers print karo jo 7 se divisible hain.

// for(let i=7; i<=50; i +=7){
//   console.log(i);
// }

// 13. 1 se 10 tak numbers ka square print karo.
 
// for(let i=1; i<=10; i++){

//   console.log(i*i);
// }
  
// 14. 1 se 10 tak numbers ka cube print karo.
 
// for(let i=1; i<=10; i++){

//   console.log(i*i*i);
// }

// 15. 1 se 20 tak even numbers ka sum find karo.
// let sum=0;
// for (let i=2 ; i<=20 ; i+=2){
//   sum+=i;
  
// }
// console.log(sum)

// 16. 1 se 20 tak odd numbers ka sum find karo.

// let sum=0;
// for (let i=1 ; i<=20 ; i+=2){
//   sum+=i;
  
// }
// console.log(sum)

// 17. Kisi number ke factors print karo.

// Example:

// Input: 10
//  Output: 1 2 5 10
// let num =10;
// for(let i=1; i<=10; i++){
//   if(num%i===0){
//     console.log(i)
//   }
// }

// 18. 1 se 50 tak numbers mein 10 se divisible numbers count karo.

// Output:

// // 5
// let count =0;

// for(let i=1; i<=50; i++){
//   if(i%10===0){
//     count++
   
//   }
// }
//  console.log(count)

// 19. 1 se 100 tak 2 aur 3 dono se divisible numbers print karo.

// for(let i=1; i<=100; i++){
//  if(i%2===0  && i%3===0 ){
//   console.log(i)
//  }
// }

// 20. Kisi number ka table reverse order mein print karo.
// let table =5;
// for(let i=10; i>=1; i--){
// console.log("5 * ", i , "= ",table*i);
// }
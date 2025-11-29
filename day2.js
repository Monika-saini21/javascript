//## control flow (conditional statement and loops )##

//**conditional statement


//(((((1.if or if else or else if practice question )))))))


//  let num = 16;

//1.Write a program to check if a number is even or odd.
// if (num % 2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

//2.Check if a person is eligible to vote (age ≥ 18).
// let age = 11;

// if (age >= 18){
//     console.log("aligible");
// }
// else{
//     console.log("not eligible");
// }

//3.Check if a number is positive, negative, or zero (use if + else + else).
// let num = 0;

// if(num > 0){
//     console.log("positive");
// }
// else if (num < 0){
//     console.log("negative");
// }
// else {
//     console.log("zero");
// } 

//4.Check if a Number is Divisible by 5
// let num = 23;
// if (num % 5 === 0 ){
//     console.log("divided by 5");
// }
// else{
//     console.log("not devided by 5")
// }

//5.Take two numbers and print which one is bigger.
// let x = 80 ;
// let y = 20 ;
// if (x > y){
//     console.log(x + " is larger");
// }
// else{
//     console.log(y + " is larger");
// }  

//6.If password length is ≥ 8, print “Strong password”.
// let password ="abcd123";

// if (password.length >= 8 ){
//     console.log("Strong password")
// }else {
//   console.log("Weak password");
// }

//7.Check Marks Pass or Fail
// let num=30

// if (num >= 40 ){
//     console.log("pass")
// }else {
//   console.log("fail");
// }

//8. Check if Number is Within a Range
// let num =105;
// if (num >= 0 &&  num <= 100)
// {
//     console.log("in range")
// }else{
//     console.log("not in range")
// }


// ((((( 2.(switch statement))))))

// Used when you have many fixed values to check.

//1.Day of the Week
// let day = 9;
// switch(day){
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;     
//     case 7: console.log("dunday"); break;   
//     default: console.log("not valied ")
// }

//2.Use switch to print grade meaning:
// let grade = "F" ;

// switch(grade){
//     case "A" : console.log("Excellent"); break;
//     case "B" : console.log("Good"); break;
//     case "C" : console.log("Average"); break;
//     case "D" : console.log("Poor"); break;
//     case "F" : console.log("Fail"); break;
//     default : console.log("Invalid grade")
// }

//3.Print month name based on the month number.
// let month = 5;
// switch(month)
// {
//         case 1: console.log("January"); break;
//         case 2: console.log("February"); break;
//         case 3: console.log("March"); break;
//         case 4: console.log("April"); break;
//         case 5: console.log("May"); break;
//         case 6: console.log("June"); break;
//         case 7: console.log("July"); break;
//         case 8: console.log("August"); break;
//         case 9: console.log("September"); break;
//         case 10: console.log("October"); break;
//         case 11: console.log("November"); break;
//         case 12: console.log("December"); break;
//         default: console.log("Invalid month");
// }

//4.Calculator Using Switch
// let x = 5;
// let y = 3;
// let op = "*";
// switch (op){
//     case "+" : console.log(x + y); break;
//     case "-" : console.log(x - y); break;
//     case "*" : console.log(x * y); break;
//     case "/" : console.log(x / y); break;
//     default : console.log("invalid oprater");
// }

//5.Check Vowel or Consonant (Switch Version)
// let vowel = "p";
// switch(vowel){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":    
//     console.log(vowel +" is Vowel"); break;
//     default: console.log(vowel +" is Consonent")  

// }

//6.Traffic Signal
// let signal = "red";
// switch(signal){
//     case "red" : console.log("Stop"); break;
//     case "yellow" : console.log("Ready"); break;
//     case "green" : console.log("Go"); break;
//     default : console.log("Invalid signal")
// }

//7.Weekday or Weekend
// let day = 6;
// switch(day){
//     case 1 :
//     case 7 :
//         console.log("Weekend"); break;
//     case 2 : 
//     case 3 :
//     case 4 :
//     case 5 :
//     case 6 :
//         console.log("Weekday"); break;     
//     default : console.log("invalid day ");                  
// }

//8.Number to Word (0–5)
// let num = 3 ;
// switch(num){
//     case 0 : console.log("Zero"); break;
//     case 1 : console.log("One"); break;
//     case 2 : console.log("Two"); break;
//     case 3 : console.log("Three"); break;
//     case 4 : console.log("Four"); break;
//     case 5 : console.log("Five"); break;
//     default : console.log("invalid number"); 
// }

//9.Simple Menu Program
//  let menu = 3 ;
//  switch(menu){
//      case 1 : console.log("Pizza"); break;
//      case 2 : console.log("Burger"); break;
//      case 3 : console.log("Momos"); break;
//      case 4 : console.log("Pasta"); break;
//      default : console.log("invalid Menu"); 
//  }

//10.
//  let season = 3 ;
//  switch(season){
//      case 1 : console.log("Winter"); break;
//      case 2 : console.log("Spring"); break;
//      case 3 : console.log("Summer"); break;
//      case 4 : console.log("Autumn"); break;
//      default : console.log("invalid Season"); 
//  }
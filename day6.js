// 🎈🎈🎈🔎🔎functions🎈🎈🎈🔎🔎
//   Block of code that perfome a specific task , can be invoked whenever needed.

//🎈🎈 function Defination                    🎈🎈function call/invoke

// function functionName(){               fumctionName();
//     //do some work
// }

// Redundancy = unnecessary repetition of code.

// Jab function ke andar same code ya same kaam baar-baar
//  unnecessarily repeat ho raha ho, use redundancy kehte hain.

//1. e.g. -> 

// function myFunction(msg){     // function ke name ke sath jo Parentheses us mai perameter pass hota hai
//     console.log(msg)  //ager argument pass nhi kiya to undefined aaye ga
// }

// myFunction() //undefined  // function ke name ke sath jo Parentheses mai argument pass hota hai
// myFunction("I Love Js");  


//2. e.g. -> return the function.

// function sum(x,y){                                                           //function functionName(param1,param2,....){}
//  // params fumction like local var of funtion->block scope                   //do some work  //calculation return
//      s = x+y;
//      return s;
// }

// let val = sum(2,5);
// console.log(val);

// 🎈🎈Arrow function🎈🎈  moden js
// compact way to writing a function.

// syntx: const functionName =(param1,param2...)=>{
//     //do some work
// } 

//1.🎈🎈 find the no. of vovwel in string .
// function countVowels(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++ ){

//         //  if("aeiou".includes(str[i])){
//         //     count++;
//         //     console.log(str[i])
//         //  }


//         if( str[i]==="a" ||
//             str[i]==="e" ||
//             str[i]==="i" ||
//             str[i]==="o" ||
//             str[i]==="u" 
//         ){
//             count++;
            
//         }
        
//     }
//     console.log(count)
// }

// countVowels("monika");


//2.🎈🎈 find the no. of vovwel in string . using arrow function.

// const countVowels = (str) =>{
//     let count = 0;
//     for(let i of str){
//         if("aeiou".includes(i)){
//             count++;
//             console.log(i)
//         }
        
//     }
//     console.log(count);
    
// }
// countVowels("monika");



//🎈🎈🔎🔎🔎🔎 method in fumction🔎🔎🔎🔎🎈🎈

//🎈🎈forEach(callback function)   //it is also a higher order function.  
// higher order function ya to  kisi function ko paramter use kr rhe hote hai ya function ko retun kr rhe hote hai.

//callBack function : here it is a function to execute for each element in array.

// ** A callback is a function passed as an argument in another function.**

// let array = [1,2,3,4,5,];

// array.forEach((num)=>{  //we can pass the parameter to print (val,index,array).
//    console.log(num*num);
// })



// 🎈🎈arr.map(callback function(val,index,array))
// creating a new arryay with the result of some operations. the value  its callback return are used to form new Array.

// let arr = [2,3,4,5,6];
// const newarr = arr.map((num)=>{
//    console.log(num*2);
// })


// 🎈🎈arr.filter(callback function(val,index,array))
// creating a new array of array that give true for a condition/filter.

// else.g.=> print all even elements
// let number = [1,2,3,4,5,6];
// const evenNumber = number.filter((num)=>{
//     return  num%2 ===0;
// })
// console.log(evenNumber);


// 🎈🎈arr.reduce(callback function(resultValue,currentValue))
// perfome some operation& reduce the array to a single value. it return the single value.

// let arr = [1,2,3,4,];
// const greater = arr.reduce((res,curr)=>{
//     return res>curr ? res : curr ;
// })
// console.log(greater);
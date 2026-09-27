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


// 🟢 Easy


//1. Ek function banao jo "Hello World" print kare
        // function print(){
        //     console.log("hello World")
        // }
        // print();

//2. Ek function banao jo 2 numbers ka sum return kare.
    //    function add (x,y){
    //        return x+y;
    //    }
    //    let val = add(2,3);
    //    console.log(val);


//3. Ek function banao jo 2 numbers ka subtraction kare.
        // function sub (x,y){
        //    console.log(x-y)
        // }
        // sub(10,6);

//4. Ek function banao jo number ka square return kare.
    //     function square(x){
    //        return x*x;
    //     }
    //    let val= square(6);
    //    console.log(val);


//5. Ek function banao jo check kare number even hai ya odd.
        //   function check(x){
        //     if(x%2 === 0 ){
        //         console.log(`${x} is even number`)
        //     }else{
        //          console.log(`${x} is odd number`)
        //     }

        //   }
        //   check(3);

//6. Ek function banao jo 2 numbers mein se greater number return kare.
        // function greater(x,y){
        //       let number = x>y ? x:y
        //       return number;
        // }
        // let val = greater(2,9);
        // console.log(val);


//7. Ek function banao jo name parameter le aur "Hello Monika" print kare.
        // function print(name){
        //     console.log("Hello"+ name);
        // }
        // print(" Monika")
      
//8. Ek function banao jo 1 se 10 tak numbers print kare.
        // function numPrint(){
        //     for(let i=1; i<=10; i++){
        //         console.log(i);
        //     }
        // }
        // numPrint();
 
//9. Ek function banao jo 1 se n tak sum calculate kare.
        // function sum(n){
        //     let s = 0;
        //     for(let i=1; i<=n; i++){
        //         s+=i;
                
        //     }
        //     console.log(s)
        // }
        // sum(5);

//10. Ek function banao jo number ka factorial return kare.
        // function factorial(n){
        //     let fact = 1;
        //     for(let i=1; i<=n; i++){
        //         fact*=i;
                

        //     }
        //     return fact;
            
        // }
        // let val = factorial(5);
        // console.log(val);


//         🟡 Medium

//11. Ek function banao jo check kare number prime hai ya nahi.
       
//        function chickPrime(n){
//        let count = 0;

//         for (let i = 1; i <= n; i++) {
//             if (n % i === 0) {
//               count++;
//             }
//         }

//         if (count === 2) {
//           console.log("Prime");
//         } else {
//           console.log("Not Prime");
//         }

//         }
//         chickPrime(7);

//12. Ek function banao jo string ko reverse kare.
// Input: hello
// Output: olleh

        //  function reverString(str){                       
        //       let chickString = str.split("").reverse().join("");
        //       return chickString
        //  }
        // console.log(reverString("hello")) ;

//13. Ek function banao jo check kare string palindrome hai ya nahi.
        //  function palindrome (str){                       
        //       let chickString = str.split("").reverse().join("");
        //       if(chickString === str){
        //         console.log(`${str} is a palindrome`)
        //       }else{
        //         console.log(`${str} is not a palindrome`)
        //       }
        //  }
        //  palindrome("madam")


// let user =  userName.split("").reverse().join("");
// if(userName === user){
//     console.log(user +" is Palindrome")
// }else{
//     console.log(user +" is not Palindrome")
// }


// Input: madam
// Output: Palindrome
//14. Ek function banao jo string mein vowels count kare.
//      function vowels(str){
//         let count = 0;
//         for(let i=0; i<str.length; i++){
//                 if("aeiou".includes(str[i])){
//                     count++;
                    
//                 }
              
//         }
//         console.log(count);
//      }
//     vowels("hello monika");


//15. Ek function banao jo array ke maximum element ko find kare.
        // let numbers = [10, 50, 20, 80, 30];
        // const minimum = numbers.reduce((res,curr)=>{
        //    return res>curr ? res:curr;
        //  })
        // console.log(minimum);
        

//16. Ek function banao jo array ke minimum element ko find kare.
    //    let arr = [4,7,9,2,6];
    //    const minimum = arr.reduce((res,curr)=>{
    //        return res<curr ? res:curr;
    //    })
    //    console.log(minimum);


//17. Ek function banao jo array ke saare elements ka sum return kare.
    //  let arr = [4,6,8];
    //  const sumElement = arr.reduce((res,curr)=>{
    //     return res+curr;
    //  })
    //  console.log(sumElement);


//18. Ek function banao jo array mein even numbers print kare.
        // let arr =[2,3,4,5,6,7,8,9];
        // let evenNumber = arr.filter((val)=>{
        //     return val%2 === 0;
        // })
        // console.log(evenNumber);

//19. Ek function banao jo kisi number ka table print kare.
// Input: 5

// Output:
// 5
// 10
// 15
// 20
// ...
// 50

    //    function table(n){
    //     let t = 0;
    //     for(let i=1; i<=10; i++){
    //        t= n*i;
    //        console.log(`5 * ${i} = ${t}`)

    //     }
    //    }   
    //    table(5);

//20. Ek function banao jo number ke digits count kare.
// Input: 12345
// Output: 5

    //    function countDigits (n){
    //     let str = n.toString();
    //     let count = 0;
    //        for(let i=0; i<str.length; i++){
    //            count++;
               
               
    //        }
    //        return count;
    //    }
    //    let val = countDigits(12345);
    //    console.log(val);


    
// 🔴 Thoda Tricky
//21. Ek function banao jo array mein duplicate elements find kare.
// let numbers = [1, 2, 3, 2, 4, 3, 5];

// Output:

// 2 3
//22. Ek function banao jo array ko reverse kare bina .reverse() use kiye.
//23. Ek function banao jo 2 numbers swap kare.
//24. Ek function banao jo check kare ki ek number 2 aur 3 dono se divisible hai ya nahi.
//25. Ek function banao jo multiple parameters receive kare aur unka sum return kare.
// sum(10, 20, 30, 40)

// Expected:

// 100
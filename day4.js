///(((strings)))

// In JavaScript, a string is a data type used to represent text. A string is a sequence of characters such as letters, numbers, spaces, or symbols.

// For example:

// let name = "John";
// let message = "Hello, world!";
// let phone = "123456789";

// Here, "John", "Hello, world!", and "123456789" are all strings.

// Creating strings

// JavaScript lets you create strings using three kinds of quotes:

// let a = "Hello";        // Double quotes
// let b = 'Hello';        // Single quotes
// let c = `Hello`;        // Backticks

// Backticks are especially useful because they allow you to insert variables directly:

// let name = "Alex";

// let message = `Hello, ${name}!`;

// console.log(message);

// Output:

// Hello, Alex!

// Common string operations

// You can find the length of a string:

// let text = "JavaScript";

// console.log(text.length);

// Output:

// 10

// You can also access individual characters:

// let text = "Hello";

// console.log(text[0]); // H
// console.log(text[1]); // e

// And combine strings using +

// .🎈🎈template literals in jsx🎈🎈

// A way to have embedded expressions in String.apply

// `tis is a pen`

// 🖊🖊string interpolation🖊🖊

// TO create sting by doing substitution of placeholder.

// `string text ${expresion} string text`

// 🔎🔎escape charecters🔎🔎
// console.log("monika\nsaini")  //next line

// console.log("monika\tsaini")  // tab space

// let str = "monika\tsaini"
// console.log(str.length)  // output  12 but if i count it was 13 the reason is the escape char or the \t 1 char not 2 any escape

// 🎈string method 🎈
//  There are build in function/method yo manipulate string.

// 🖊🖊str.toUpperCase()  //strings are immutable hun inhe dubara vale assing nhi kr skte. it retun the new string .
// let str = "monika";
// str = str.toUpperCase();
// console.log(str);

// 🖊🖊🖊str.toLowerCase()

// let str = "Monika Saini";
// str = str.toLowerCase();
// console.log(str);

// 🖊🖊str.trim()  //remove whitespace

// let str ="    monika saini";
// console.log(str.trim());

// 🖊🖊str.slice(start ,end?) //it retun the part of string if i want tje 1 ti 4 index value so it retun the onlt 123 the end value it not retun  end value is non exclucive. 

// let str = "monika";

// console.log(str.slice(2,5))    // the end vale is non exclusive
// console.log(str.slice(2))  // if i not put the end value so it print thr whole string from the value i put the startTransition.

// 🖊🖊str1.concat.(str2)  // join the two string.

// let str1 = "monika";
// let str2 = "saini";
// let res = str1.concat(str2);

// console.log(res);

// let str1 = "monika";
// let str2 = "saini";
// let res = str1+str2; // we can also cancate the string with + . it gave the same output.

// console.log(res);

// 🖊🖊 str.replace(searchvalue,newvalue) //replace the search value with new value.

// let str = "helloloolo";

// console.log(str.replace("lo" , "p"));

// let str = "helloloolo";

// console.log(str.replaceAll("lo" , "p"));   // with the replaceAll  we replace the all value

// 🖊🖊 str.charAt(indexvalue)  find the index value

// let str ="monika";

//  console.log(str[4]);  // also find the value with the help of sequire braces.

// console.log(str.charAt(2));


// question  user se prompt le kr name mai start pr @ add kro or enter name ki lenght add kro

// let username = prompt("enter the full name");
// let user = "@"+username+ username.length;
// console.log(user);

// 🟢 Beginner String Questions

// 1. Ek string "Hello World" ko print karo.

// let str = "Hello World";

// console.log(str);

// 2. "JavaScript" ki length find karo.

// let str = "JavaScript" ;
// console.log(str.length);

// 3. String "Hello" ka first character print karo.
 
// let str = "Hello";
// console.log(str.charAt(0));

// 4. String "JavaScript" ka last character print karo.

// let str = "Hello";
// console.log(str.at(-1));

// 5. "Hello World" ko uppercase mein convert karo.

// let str = "Hello World";
// console.log(str.toUpperCase());

// 6. "HELLO WORLD" ko lowercase mein convert karo.

// let str = "Hello World";
// console.log(str.toLowerCase());

// 7. "I love JavaScript" mein "JavaScript" ko "Coding" se replace karo.

// let str = "I love JavaScript" ;
// console.log(str.replace("JavaScript","Coding"));

// 8. String "Hello World" mein "World" word present hai ya nahi check karo.

// let str = "Hello World";
// console.log(str.includes("World"));

// 9. String "JavaScript" mein letter "a" kis index par hai, find karo.

// let str = "JavaScript";
// console.log(str.indexOf("a"));

// 10. "Hello World" mein "World" ka index find karo.

// let str = "Hello World";
// console.log(str.indexOf("World"));
// console.log(str.indexOf("b"));  //output:-1 jub string value present na ho to ye -1 retun krega.


// 🟡 Thoda Practice

// 11. User se ek string input lo aur count karo ki usme kitne characters hain.
 
// let userName = prompt("enter the name");
// let user = userName+userName.length;
// console.log( user);

// 12. Ek string ko reverse karo.

// Example:

// Input:  hello
// Output: olleh
 
// let userName = prompt("enter the name");
// let user = userName.split("").reverse().join("");
// console.log( user);

// 13. Check karo ki string palindrome hai ya nahi.

// Example:

// Input: madam
// Output: Palindrome
 
// let userName = prompt("enter the Palindrome character");
// let user =  userName.split("").reverse().join("");
// if(userName === user){
//     console.log(user +" is Palindrome")
// }else{
//     console.log(user +" is not Palindrome")
// }



// 14. String mein kitne vowels (a, e, i, o, u) hain, count karo.

// let str = "javascript";
// let count = 0;
// for (let i=0;i<str.length;i++){
//     if("aeiou".includes(str[i])){
//         count++;
//     }
// }
// console.log(count);

// 15. String mein kitne spaces hain, count karo.

// let str = "JavaScript is easy" ;
// console.log(str.split(" ").length-1) 

// 16. String "JavaScript is easy" ko words mein split karo.

// Expected:

// ["JavaScript", "is", "easy"]

// let str = "JavaScript is easy" ;
// console.log(str.split(" ")) // bracs mai space na do to vo single char arrry me convert kr deta hai

// 17. String ke har character ko ek-ek karke print karo.

// let str = "JavaScript" ;
// for(let i=0; i<str.length;i++){
   
//     console.log(str[i]) 
// }


// 18. String mein kitne times "a" aaya hai, count karo.

// let str = "javascript";
// let count = 0;
// for(let i=0; i<str.length;i++){
//     if ("a".includes(str[i])){
//         count++;
//     }
// }

// console.log(count)
// 19. String "hello" ka first character uppercase karo.

// Expected:

// Hello

// let str = "hello"
// console.log(str.toUpperCase().charAt(0) + str.slice(1))

// 20. Ek string mein sabhi vowels ko count karo aur result print karo.

// Example:

// Input: JavaScript
// Output: 3

// let str = "javascript";
// let count = 0;
// for(let i=0; i<str.length;i++){
//     if ("aeiou".includes(str[i])){
//         count++;
//     }
// }

// console.log(count)
// 🔎🔎🎈ARREYS🎈🔎🔎
// collection of items  //in the array the postion/index are important

// let marks = [97,78,67,89,58];
// console.log(marks);
// console.log(marks.length); //property
// console.log(typeof marks); //type of object 

// 🎈🎈array indics 🎈🎈

// let marks = [97,78,67,89,58];
// console.log(marks[2]);
// console.log(marks[6]);  //if we write the index which was not present it gave the undefind in output

// 🎈🎈change the arry index 🎈🎈

// let marks = [97,78,67,89,58];
// marks[2] = 66;  // array are mutable but strings are immutable
// console.log(marks);  

// 🎈🎈looping over an array🎈🎈

// print all element of an array 
// we use loop for iterable . // we can itrate (string, object ,array)

// let friends = ["monika","kamal","komal","dev","vikas","nitish","jass"];
// for(let indx=0; indx < friends.length; indx++){
//   console.log(friends[indx]);
// }

// but in array we prefer for of loop


// let friends = ["monika","kamal","komal","dev","vikas","nitish","jass"];
// for(let list of friends){
//     console.log(list);
//     console.log(list.toUpperCase());//uppercase
// }

// 🖊🖊for a given array with marks of student -> [85,97,44,37,76,60]
// Find the average marks of the entire class. 🖊🖊

// let marks = [85,97,44,37,76,60];
// let sum = 0;

// // for (let i=0 ; i<marks.length;i++){
// //  sum+=marks[i];
 
// // }

// for(let val of marks){
//     sum+=val;
// }
// let average = sum / marks.length;
// console.log(` average marks of the class ${average}`);

// 🖊🖊 for a given array with price of 5 items -> [250,645,300,900,50]
//all items have an offer of 10% off on item. Change he array to store final price affer
//appling .

// let items = [250,645,300,900,50];
// let i = 0;
// for (let val of items){
//     console.log(`value of items ${val}`);
//     let offer = val / 10 ;
//     items[i] = items[i] - offer;
//     console.log(`value of 10% off items ${items[i]}`);
//     i++;
// }

// for(let i=0 ; i < items.length; i++){
//     // console.log(`value of items ${items[i]}`);
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     // console.log(`value of 10% off items ${items[i]}`)
    
// }
// console.log(items)

// 🎈🎈array methods 🎈🎈

// 1. push (add at the end new items.)

// let fruits = ["apple","mango","banana","grapes",];
// // 1. push (add at the end new item.)
// fruits.push("orange"); 
// console.log(fruits);
// //2. pop (remove the end item)
// fruits.pop() 
// console.log(fruits);
// //3. tostring (convert into strings)
// console.log(fruits.toString()); 
// //4.concat (add to arrrays)

// let number = [1,2,3,4,5];
// let num = [6,7,8];
// let newNumber = number.concat(num);
// console.log(newNumber);

// //5. unshift (add at the start of array)
// fruits.unshift("orange"); 
// console.log(fruits);
// // 6. shift (remove the start item)
// fruits.shift() 
// console.log(fruits);
// //7.splice(startindx ,endindex) it retun the part of array the endindex is non exclusive .
// let things = ["table","bed","chair","tv","door"];
// console.log(things.slice(2,4));



//8. splice(startindx,delcount,newE(1..)) //change ariginal array (add ,remove,replace)
//  let arr =[1,2,3,4,5,6];
     //  arr.splice(2,2,101,102); 
     //  console.log(arr);
// add element
     // arr.splice(2,0,101);
     // console.log(arr)
//delete element
     // arr.splice(2,1); single element
     //  arr.splice(3); //when we dont pass the delete items it aotumatecal delete the Array.
     //  console.log(arr);
//replace element
     // arr.splice(1,1,101);
     // console.log(arr);


//    🎈🎈🎈  practice question🎈🎈🎈

//🎈🎈 1.  create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

// (a) Remove the first company from the array
   
    // let company = [ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
    // company.shift();
    // console.log(company);

// (b) Remove Uber & Add Ola in its place

    //  let company = [ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
    //  company.splice(2,1,"Ola");
    //  console.log(company);

//Add Amazon at the end.
    //   let company = [ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
    //   company.push("Amazon");
    //   console.log(company);    


// 🟢 Beginner Array Questions

// 1. Ek array banao jisme 5 fruits ke names ho aur console mein print karo.
    //   let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
    //   console.log(fruits);

// 2. Ek array ke first element ko print karo.
    // let fruits = ["Apple", "Banana", "Mango", "Orange"];
    // console.log(fruits[0]) ;


// 3. Array ka last element print karo.   
    // let fruits = ["Apple", "Banana", "Mango", "Orange"];
    // console.log(fruits[fruits.length-1]) ;
    
// 4. Array mein total kitne elements hain, find karo.    
    // let fruits = ["Apple", "Banana", "Mango", "Orange"];
    // console.log(fruits.length) ;


// 5. Array mein ek naya element end mein add karo using push().
    //  let fruits = ["Apple", "Banana", "Mango", "Orange"];
    // fruits.push("grapes");
    // console.log(fruits);

// 6. Array ke end se ek element remove karo using pop().
    //   let fruits = ["Apple", "Banana", "Mango", "Orange"];
    //   fruits.pop();
    //   console.log(fruits);


// 7. Array ke beginning mein ek element add karo using unshift().
        //  let fruits = ["Apple", "Banana", "Mango", "Orange"];
        //  fruits.unshift("grapes");
        //  console.log(fruits);

// 8. Array ke beginning se ek element remove karo using shift().
    //    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    //    fruits.shift();
    //    console.log(fruits);

// 9. Ek array ke saare elements ko for loop se print karo.
        //  let numbers = [10, 20, 30, 40, 50];
        //  for (let i=0; i<numbers.length ; i++){  //with for loop 
        //     console.log(numbers[i])
        //  }

        //  let numbers = [10, 20, 30, 40, 50];
        //  for(let i of numbers){                   /// with for of loop
        //     console.log(i);
        //  }


// 10. Array mein 30 present hai ya nahi, check karo.

        // let numbers = [10, 20, 30, 40, 50];
        // let present = 40;
        // let found =false;
        // for(let i=0; i<numbers.length; i++){
                  
        //     if(present === numbers[i]){
        //         found = true ;
        //         break;
                
        //     }
        // }

        // if(found){
        //     console.log(`${present} is present`);
        // }else{
        //     console.log(`${present} is not present`);
        // }


//      🟡 Intermediate Questions

// 11. Array ke saare numbers ka sum find karo.
    //    let numbers = [10, 20, 30, 40, 50];
    //    let sum = 0;
    //    for(let i=0; i<numbers.length; i++){
    //     sum+=numbers[i]
    //    }
    //    console.log(sum);
  

// 12. Array mein se sirf even numbers print karo.
        // let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        // for(let i=0; i<numbers.length; i++){
        //     if(numbers[i]%2===0){
        //         console.log(numbers[i]);
        //     }
        // }

// 13. Array mein se sirf odd numbers print karo.
        //   let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        //   for(let i=0; i<numbers.length; i++){
        //     if(numbers[i]%2 !== 0){
        //         console.log(numbers[i]);
        //     }
        //   }

// 14. Array mein sabse bada number find karo.
        //  let numbers = [10, 45, 23, 89, 12];
        //  let greater = 0 ;
        //  for(let i=0; i<numbers.length; i++){
        //     if(numbers[i]>greater){
        //         greater = numbers[i]
        //     }
            
        //  }
        //  console.log(greater)


// 15. Array mein sabse chhota number find karo.
        //  let numbers = [10, 45, 23, 89, 12];

        //  let smaller = numbers[0] ;    //Aur hum smaller = 0 rakhein, to -10 < 0 hoga aur eventually -20 mil sakta hai, but initialization with numbers[0] is
        //                                 //   more generally correct because it works whether numbers are positive, negative, or mixed.
        //  for(let i=0; i<numbers.length; i++){
        //     if(numbers[i]<smaller){
        //         smaller = numbers[i];
        //     }
            
        //  }
        //  console.log(smaller);


// 16. Array ko reverse karo.
        // let numbers = [1, 2, 3, 4, 5];
        // // numbers.reverse()   reverse orignal array ko bhi change kr deta ahi
        // // console.log(numbers)

        // // for loop
       
        // for (let i=numbers.length-1; i>=0 ; i--){
        //     console.log(numbers[i])
        // }
// // Output: [5, 4, 3, 2, 1]

// 17. Array mein kitne even numbers hain, count karo.
        //   let numbers = [1, 2, 3, 4, 5];
        //   let count = 0;
        //   for(let i=0; i<numbers.length; i++){
        //     if(numbers[i]%2 === 0){
        //         count++;
        //     }
        //   }
        //    console.log(count);

// 18. Array mein kitne odd numbers hain, count karo.
        //   let numbers = [1, 2, 3, 4, 5];
        //   let count = 0;
        //   for(let i=0; i<numbers.length; i++){
        //     if(numbers[i]%2 !== 0){
        //         count++;
        //     }
        //   }
        //    console.log(count);


// 19. Array ke har number ka square print karo.
        //  let numbers = [2, 3, 4, 5];
        //  for (let i=0; i<numbers.length; i++){
        //     numbers[i]*=numbers[i];
        //     console.log(numbers[i])
        //  }
// // Output: 4 9 16 25

// 20. Array mein duplicate values find karo.
    //      let numbers = [1, 2, 3, 2, 4, 3, 5];
    //      for(let i=0; i<numbers.length; i++){
    //         for(let j=i+1; j<numbers.length; j++) {   ///i+1  "Current element ko uske baad ke elements ke saath compare karo."
    //                  if(numbers[i] === numbers[j]){
    //                     console.log(numbers[j])
    //                  }
    //         }
    //      }
    //    // Output: 2, 3

// 🔴 Thoda Tricky
// 21. Array se duplicate elements remove karo.
//         let numbers = [1, 2,2,2, 3, 2,3, 4, 3,2, 5];        
//         for(let i=0; i<numbers.length; i++){
//              for(let j=i+1; j<numbers.length; j++){
//                 if(numbers[i]===numbers[j]){
//                    numbers.splice(j,1);
//                    j--     // j-- ka purpose hai element skip hone se bachana.
//                            // Tumhare [1, 2, 3, 2, 4, 3, 5] wale array mein bina j-- bhi output aa raha hai, 
//                            // lekin consecutive duplicates jaise [1, 2, 2, 2, 4] mein difference clearly dikhega.
                   
//                 }
//              }              
//         }
// console.log(numbers)

// 22. Array ko ascending order mein sort karo.
//         let  numbers = [50, 10, 40, 20, 30];
       
//         for(let i=0; i<numbers.length; i++){
//             for(let j=i+1; j<numbers.length; j++){ //ka matlab hai i ke next element se comparison start karo.
//                 if(numbers[i]>numbers[j]){
//                    let temp = numbers[i];
//                    numbers[i]=numbers[j];
//                    numbers[j]=temp;
                   
//                  }
//              }
//         }
// console.log(numbers);
 // Output: [10, 20, 30, 40, 50]

// 23. Array mein second largest number find karo.
        // let  numbers = [50, 10, 40, 20, 30];
       
        // for(let i=0; i<numbers.length; i++){
        //     for(let j=i+1; j<numbers.length; j++){ 
        //         if(numbers[i]<numbers[j]){
        //            let temp = numbers[i];
        //            numbers[i]=numbers[j];
        //            numbers[j]=temp;
                   
        //          }
        //      }

        // }
        // console.log(numbers)     
        // console.log(`${numbers[1]} is the 2nd largest number`);

// 24. Array ke saare elements ka average find karo.
        // let  numbers = [50, 10, 40, 20, 30];
        // let sum = 0;
        // let avg = 0;
        // for(let i=0; i<numbers.length; i++){
        //     sum+=numbers[i];
        // }
        // avg=sum/numbers.length;
        // console.log(avg);



// 25. Array mein kisi particular number ki frequency/count find karo.

        // let numbers = [2, 5, 2, 8, 2, 9];
        // let num = 8;
        // let count = 0;
        // let found = false;
        // for(let i=0; i<numbers.length; i++){
        //        if(num === numbers[i]){
        //        count++
        //        found = true;
               
                
        //         }
        //      }


        // if(found){
         
        //   console.log(`${num} is ${count} time.`)
        // }else{
        //     console.log(`${num} is not present`)
        // }   
        





// // Number: 2
// // Output: 3   
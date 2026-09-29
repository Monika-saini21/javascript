//1. create a h2 heading element with text"hello javascript" append "from appna college student " to this text using js.
        // let h2 = document.querySelector("h2")
        // console.log(h2.innerText);
        // h2.innerHTML = h2.innerText +" from apna college student."


// 2.create 3 div with comman class name-"box". Access them & add some unique text to each of them.
        // let divs = document.querySelectorAll(".box");
        //     console.log(divs);

        // // if i hane 20 div we want to change all of them .so it is not good .    
        // // divs[0].innerText = " new unique value 1"
        // // divs[1].innerText = " new unique value 2"
        // // divs[2].innerText = " new unique value 3"


        // // so we apply loop to solve the problem
        // let count = 0;
        // for(let div of divs){
        //     div.innerText = (`new unique value ${count}`);
        //     count++;
        // }


// #3. create a new button element. Give it text "click me".background color "red"& text color white.
// insert the button as the first element in body.     

// let body = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerText= "Clik Me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// body.prepend(btn);
        

//# 4. create a p tag in html give it a class& some style
// now create a new class in css and try to append this class to the p Element.
// did you notice how you overwrite a class name when you add a new one?
// solve a problem using a class list

// let para = document.querySelector("p");

// // para.setAttribute("class","newcontent")   it remove the css we apply in first class .

// // if we dont whant my css to remove we use

// para.classList.add("newcontent");




// // # 5. toggle button
// let  btn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let mode = "light";
// btn.addEventListener ("click" , ()=>{
//         console.log("button is click");
//         if(mode === "light"){
//                mode = "dark"; 
//                body.classList.add("dark")
//                body.classList.remove("light")
//         }else{
//                 mode = "light"
//                 body.classList.add("light")
//                 body.classList.remove("dark")
//         } 
//         console.log(mode);
// })



// # 6. change the img with mousehover
let img = document.querySelector("#change");
const originalImg = img.src; 
const hoverimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCIzrwPBMt-99B16y1g498yBoUoRin1TlP8_ZoL-BYQ&s=10"
     
img.addEventListener("mouseover",()=>{
     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCIzrwPBMt-99B16y1g498yBoUoRin1TlP8_ZoL-BYQ&s=10"
     img.src = hoverimg;

})

img.addEventListener("mouseout",()=>{
       img.src = originalImg  
})
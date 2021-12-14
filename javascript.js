let facebookData = ['@nathan','1987','FOLLOWERS','12']






let body = document.querySelector('body');
let header = document.querySelector(".header")
let secondSec = document.querySelector(".second-sec");
let upBox = document.querySelectorAll(".up-boxes");//remember is a list of classes will need for each loop to iterate through all of em
let secoverp = document.querySelector(".sec-over-p");
let boxone = document.querySelector(".box-1");
let secBox = document.querySelectorAll(".sec-box");//remember is a list of classes will need for each loop to iterate through all of em
let toggleButton = document.querySelector("#toggler");

let togglecheck = document.querySelector("#toggler").checked;//chebox value true
//function that turns dark mode
console.log(togglecheck)
function turnColorToBlack(){
   
    if(togglecheck == false){

    body.classList.toggle("body-dark")
    header.classList.toggle("header-dark")
    secondSec.classList.toggle("second-sec-dark")
 
    upBox.forEach(item =>{
    item.classList.toggle("up-boxes-dark")
    })
 
    secoverp.classList.toggle("sec-over-p-dark")
    boxone.classList.toggle("box-1-dark")
    
    secBox.forEach(item =>{
    item.classList.toggle("sec-box-dark")
    })

   }
}




//addeventListener to the darkmode button 

toggleButton.addEventListener("click", turnColorToBlack)

//variables for color change and appends of data
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
//console.log(togglecheck)

//--data variables below

//upperboxes classes
let upperboxesclasses =['facebook-main','twit-box' ,'ig-box','yout-box']

//upper boxes data
let facebookData = ['@nathan', '1987','FOLLOWERS', 12]
let twitterData =['@nathan', '1044','FOLLOWERS',99]
let igData = ['@nathan','11k','FOLLOWERS',1099]
let youtubeData =['@nathan','8239','SUBSCRIBERS',-144]
//lower boxes data
let fbLowData1= ['87', 3]
let fbLowData2= ['52', -2]

let igLowData1 =['5462', 2257]
let igLowData2=['52k', 1375]

let twitterLowData1 =['117',303]
let twitterLowData2 =['507',553]

let youtubeLowData1 = ['107',-19]
let youtubeLowData2 = ['1407',-12]

//facebook box 
    //where info will be appended
    let upBoxes = document.querySelector(".up-boxes")

    //create content variable
    let content = `
    <div class="upper-part-header-boxes">
            <i><img src="images/icon-facebook.svg" alt=""></i> <p>${facebookData[0]}</p>
          </div>
          <p class="up-boxes-p1">${facebookData[1]}</p>
          <p class="up-boxes-p2">${facebookData[2]}</p>
          
          <div class="results-flex">
          <div class="arrows"> <div class ="triangle-up"></div> <div class="triangle-down"></div></div>
          <p class="up-boxes-p3">${Math.abs(facebookData[3])} today</p>
        </div>
        </div>

    `;
    //make the content go into the div
    upBoxes.innerHTML = content;
    //
    if(facebookData[3] > 0){
     document.querySelector('.triangle-up').style.visibility = "visible"
    }
    else{
        document.querySelector('.triangle-down').style.visibility = "visible"
    }
//facebook box ends 
    
 
    


//function that turns dark mode
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
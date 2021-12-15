//JSON
let companies =
[
    {
         "name":"facebookData",
         "topIcon":"images/icon-facebook.svg",
         "account":"@nathan",
         "totalFollowers": "1987",
         "typeOfFollowers":"FOLLOWERS",
         "netChange": 12
    },

    {
        "name":"twitterData",
        "topIcon":"images/icon-twitter.svg",
        "account":"@nathan",
        "totalFollowers": "1044",
        "typeOfFollowers":"FOLLOWERS",
        "netChange":99
       
    },
    {
    
        "name":"igData",
        "topIcon":"images/icon-instagram.svg",
        "account":"@nathan",
        "totalFollowers": "11k",
        "typeOfFollowers":"FOLLOWERS",
        "netChange":1099



    },
    {
        "name":"youtubeData",
        "topIcon":"images/icon-youtube.svg",
        "account":"@nathan",
        "totalFollowers": "8239",
        "typeOfFollowers":"SUBSCRIBERS",
        "netChange":-144
    
    }
]

let secondJson =
[
    {
    "name":"facebookData",   
    "upperText":"Page views",
    "lowerTextValue":"87",
    "lowIcon":"images/icon-facebook.svg",
    "percentage": 3
    },

    {
    "name":"facebookData",   
    "upperText": "Likes",
    "lowerTextValue":"52",
    "lowIcon":"images/icon-facebook.svg",
    "percentage":-2
    },

    {
        "name":"igData",
        "upperText":"Likes",
        "lowerTextValue":"5462",
        "lowIcon":"images/icon-instagram.svg",
        "percentage":2257
    },
    
    {
        "name":"igData",
        "upperText":"Profile Views",
        "lowerTextValue":"52k",
        "lowIcon":"images/icon-instagram.svg",
        "percentage":1375

    },

    {
        "name":"twitterData",
        "upperText":"Retweets",
        "lowerTextValue":"117",
        "lowIcon":"images/icon-twitter.svg",
        "percentage":303

    },

    {
        "name":"twitterData",
        "upperText": "Likes",
        "lowerTextValue":"507",
        "lowIcon":"images/icon-twitter.svg",
        "percentage":553

    },

    {
        "name":"youtubeData",
        "upperText":"Likes",
        "lowerTextValue":"107",
        "lowIcon":"images/icon-youtube.svg",
        "percentage":-19

    },

    {
        "name":"youtubeData",
        "upperText":"TotalViews",
        "lowIcon":"images/icon-youtube.svg",
        "lowerTextValue":"1047",
        "percentage":-12
    }

]

// always use double quotes for JSON!!!
//console.log(JSON.parse(companies)[0].pageViews)

//--data variables below
//upperboxes classes
let upperboxesclasses =['facebook-main','twit-box' ,'ig-box','yout-box']

//first 4 boxes 

for(var i =0; i < companies.length;i++){
    //where info will be appended
    let upBoxes = document.querySelector(".second-sec")
    let contentDiv = document.createElement('div');
  
    //create content variable
    let content = `
    
    <div class="up-boxes-dark up-boxes ${upperboxesclasses[i]}">
        <div class="upper-part-header-boxes">
            <i><img src="${companies[i].topIcon}" alt=""></i> <p>${companies[i].account}</p>
          </div>

          <p class="up-boxes-p1">${companies[i].totalFollowers}</p>
          <p class="up-boxes-p2">${companies[i].typeOfFollowers}</p>
          
          <div class="results-flex">
          <div class="arrows"> <div class ="triangle-up"></div> <div class="triangle-down"></div></div>
          <p class="up-boxes-p3">${Math.abs(companies[i].netChange)} today</p>

        </div>
        </div>
    `;

    //make the content go into the div
    contentDiv.classList.add('super-flex');
    contentDiv.innerHTML = content;
    upBoxes.append(contentDiv);

    //conditionals
    if(companies[i].netChange > 0){
        document.querySelectorAll('.triangle-up')[i].style.visibility = "visible"
        document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(163, 72%, 41%)"
       }
       else{
           document.querySelectorAll('.triangle-down')[i].style.visibility = "visible"
           document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(356, 69%, 56%)"
       }
  
   }

//first 4 boxes ends 



//lower boxes

for(var i =0; i < secondJson.length; i++){

let lowBoxes = document.querySelector('.box-1')
let ContentDiv = document.createElement('div')


let content =`
<div class="sec-box-dark sec-box ">
        <div class="box-1-upper">
            <p class="box-1-upper-p">${secondJson[i].upperText}</p>
            <i class="box-1-upper-i"><img src="${secondJson[i].lowIcon}" alt=""></i>
        </div>

        <div class="box-1-lower">
            <p class="box-1-lower-p">${secondJson[i].lowerTextValue}</p>

            <div class="results-flex-2">
                <div class="arrows-2"><div class ="triangle-up2"></div> <div class="triangle-down2"></div></div>
                <p class="box-1-lower-p2">${Math.abs(secondJson[i].percentage)} %</p>
            </div>

        </div>
    </div>
    `

ContentDiv.classList.add('super-flex')
ContentDiv.innerHTML = content;
lowBoxes.append(ContentDiv);


if(secondJson[i].percentage > 0 )
   {

    document.querySelectorAll('.triangle-up2')[i].style.visibility = "visible"
    document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(163, 72%, 41%)"
   }
   else{
    document.querySelectorAll('.triangle-down2')[i].style.visibility = "visible"
    document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(356, 69%, 56%)"
   }
   
}
//lower boxes end

//!selection of variables after renderization

//variables for color change and appends of data
let body = document.querySelector('body');
let header = document.querySelector(".header")
let secondSec = document.querySelector(".second-sec");
let upBox = document.querySelectorAll(".up-boxes");//remember is a list of classes will need for each loop to iterate through all of em
let secoverp = document.querySelector(".sec-over-p");
let boxone = document.querySelector(".box-1");
let secBox = document.querySelectorAll(".sec-box");//remember is a list of classes will need for each loop to iterate through all of em
let toggleButton = document.querySelector("#toggler");
//
let togglecheck = document.querySelector("#toggler").checked;//chebox value true
//function that turns dark mode
//console.log(togglecheck)


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
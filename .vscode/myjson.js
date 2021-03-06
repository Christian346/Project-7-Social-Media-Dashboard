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
//let upperboxesclasses =['facebook-main','twit-box' ,'ig-box','yout-box']

//first 4 boxes 

/* if(companies1[i].netChange > 0){document.querySelectorAll('.triangle-up')[i].style.visibility = "visible"document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(163, 72%, 41%)"}else{ document.querySelectorAll('.triangle-down')[i].style.visibility = "visible"document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(356, 69%, 56%)"}*/

/*
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


*/


  /* //second validations attempt if( companies1[i].overview[j].percentage > 0 ){ //manera de cambiar entre objetos buscar!!!!  document.querySelectorAll('.triangle-up2')[i].style.visibility = "visible" document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(163, 72%, 41%)"} else{ document.querySelectorAll('.triangle-down2')[i].style.visibility = "visible" document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(356, 69%, 56%)"}*/

//lower boxes
/*
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
*/
//!selection of variables after renderization



 /*
       var contentDiv = document.createElement('div');
       var tpl= `
        <div class="up-boxes-dark up-boxes ${companies1[i].classes}">
          <div class="upper-part-header-boxes">
              <i><img src="images/${companies1[i].topIcon}" alt=""></i> <p>${companies1[i].account}</p>
            </div>
  
            <p class="up-boxes-p1">${companies1[i].totalFollowers}</p>
            <p class="up-boxes-p2">${companies1[i].typeOfFollowers}</p>
            
            <div class="results-flex">
            <div class="arrows"> <div class ="triangle-up"></div> <div class="triangle-down"></div></div>
            <p class="up-boxes-p3">${Math.abs(companies1[i].netChange)} today</p>
          </div>
          </div>
      `
    contentDiv.classList.add('super-flex');
    contentDiv.innerHTML = tpl;
    //place it in
    HTMLResponse.append(contentDiv)
  */



    
        /*
       var ContentDiv2 = document.createElement('div')

           var tpl2 =  `
       <div class="sec-box-dark sec-box ">
              <div class="box-1-upper">
                  <p class="box-1-upper-p">${companies1[i].overview[j].upperText}</p>
                  <i class="box-1-upper-i"><img src="images/${companies1[i].overview[j].lowIcon}" alt=""></i>
              </div>
       
              <div class="box-1-lower">
                  <p class="box-1-lower-p">${companies1[i].overview[j].lowerTextValue}</p>
       
                  <div class="results-flex-2">
                      <div class="arrows-2"><div class ="triangle-up2"></div> <div class="triangle-down2"></div></div>
                      <p class="box-1-lower-p2">${Math.abs(companies1[i].overview[j].percentage)} %</p>
                  </div>
       
              </div>
          </div>
       
          `
            //let tpl2 = companies1.map( item => `content`).join('')
            ContentDiv2.classList.add('super-flex')
            ContentDiv2.innerHTML = tpl2;
            lowBoxes.append(ContentDiv2);
            */

            //addeventListener to the darkmode button 


//map method returns new array
    //const tpl = companies1.map( company1 => `the content`).join('');//clear the commas or separators

    //console.log(companies1[0].overview.length)//2 overview
    
            //4           //2
//console.log(companies1.overview)
//console.log(companies1[0].overview[0].percentage)
/*
for(var i = 0; i < companies1.length;i++){
    
    for(var j=0; j < companies1[i].overview.length; j++){
             
        if( companies1[i].overview[j].percentage > 0 ){
            //manera de cambiar entre objetos buscar!!!!

            document.querySelectorAll('.triangle-up2')[0].style.visibility = "visible"
            document.querySelectorAll('.box-1-lower-p2')[0].style.color ="hsl(163, 72%, 41%)"
           }
           else{
            document.querySelectorAll('.triangle-down2')[0].style.visibility = "visible"
            document.querySelectorAll('.box-1-lower-p2')[0].style.color ="hsl(356, 69%, 56%)"
           }
        
           // console.log(companies1[i].overview[j].percentage)
    }
  
}
*/

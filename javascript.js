const api_Url = "https://run.mocky.io/v3/e777bed2-af73-4742-a035-284a8584a087"

const HTMLResponse = document.querySelector(".second-sec");

//the comma issue inside the template literal
//returns a promise
fetch(`${api_Url}/Companies`)
.then((response) => response.json())
.then((companies1) => {
   

    let contentDiv = document.createElement('div');
    const tpl = companies1.map( company1 => 
        
        //map method returns new array
        `
      <div class="up-boxes-dark up-boxes ${company1.classes}">
        <div class="upper-part-header-boxes">
            <i><img src="images/${company1.topIcon}" alt=""></i> <p>${company1.account}</p>
          </div>

          <p class="up-boxes-p1">${company1.totalFollowers}</p>
          <p class="up-boxes-p2">${company1.typeOfFollowers}</p>
          
          <div class="results-flex">
          <div class="arrows"> <div class ="triangle-up"></div> <div class="triangle-down"></div></div>
          <p class="up-boxes-p3">${Math.abs(company1.netChange)} today</p>
        </div>
        </div>
   
    
    `).join('');//clear the commas or separators
   
    
    contentDiv.classList.add('super-flex');
    contentDiv.innerHTML = tpl;
    //place it in
    HTMLResponse.append(contentDiv)
    
   for(var i =0; i < companies1.length ;i++){
    if(companies1[i].netChange > 0){
        document.querySelectorAll('.triangle-up')[i].style.visibility = "visible"
        document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(163, 72%, 41%)"
       }
       else{
           document.querySelectorAll('.triangle-down')[i].style.visibility = "visible"
           document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(356, 69%, 56%)"
       }
   }


//2 boxes each
 
   
    //console.log(companies1[0].overview.length)//2 overview
    
 
 

    let lowBoxes = document.querySelector('.box-1')
    let ContentDiv2 = document.createElement('div')

    let tpl2 = companies1.map( item => 
            `
        <div class="sec-box-dark sec-box ">
                <div class="box-1-upper">
                    <p class="box-1-upper-p">${item.overview[0].upperText}</p>
                    <i class="box-1-upper-i"><img src="images/${item.overview[0].lowIcon}" alt=""></i>
                </div>

                <div class="box-1-lower">
                    <p class="box-1-lower-p">${item.overview[0].lowerTextValue}</p>

                    <div class="results-flex-2">
                        <div class="arrows-2"><div class ="triangle-up2"></div> <div class="triangle-down2"></div></div>
                        <p class="box-1-lower-p2">${Math.abs(item.overview[0].percentage)} %</p>
                    </div>

                </div>
            </div>

            <div class="sec-box-dark sec-box ">
                <div class="box-1-upper">
                    <p class="box-1-upper-p">${item.overview[1].upperText}</p>
                    <i class="box-1-upper-i"><img src="images/${item.overview[1].lowIcon}" alt=""></i>
                </div>

                <div class="box-1-lower">
                    <p class="box-1-lower-p">${item.overview[1].lowerTextValue}</p>

                    <div class="results-flex-2">
                        <div class="arrows-2"><div class ="triangle-up2"></div> <div class="triangle-down2"></div></div>
                        <p class="box-1-lower-p2">${Math.abs(item.overview[1].percentage)} %</p>
                    </div>

                </div>
            </div>

            `
).join('')
ContentDiv2.classList.add('super-flex')
ContentDiv2.innerHTML = tpl2;
lowBoxes.append(ContentDiv2);

    
                     //4           //2
//console.log(companies1.overview)
//console.log(companies1[0].overview[0].percentage)

for(var i = 0; i < companies1.length;i++){
    
    for(var j=0; j < companies1[i].overview.length; j++){
             
        if( companies1[i].overview[j].percentage > 0 ){
            //manera de cambiar entre objetos buscar!!!!
            document.querySelectorAll('.triangle-up2')[i].style.visibility = "visible"
            document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(163, 72%, 41%)"
           }
           else{
            document.querySelectorAll('.triangle-down2')[i].style.visibility = "visible"
            document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(356, 69%, 56%)"
           }
        
            console.log(companies1[i].overview[j].percentage)
    }
  
}
//


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

})







// always use double quotes for JSON!!!
//console.log(JSON.parse(companies)[0].pageViews)

//--data variables below
//upperboxes classes
//let upperboxesclasses =['facebook-main','twit-box' ,'ig-box','yout-box']

//first 4 boxes 
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


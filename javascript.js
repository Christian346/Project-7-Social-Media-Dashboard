const api_Url = "https://run.mocky.io/v3/e777bed2-af73-4742-a035-284a8584a087"

var HTMLResponse = document.querySelector(".second-sec");
var lowBoxes = document.querySelector('.box-1');
 //variables for color change and appends of data
 var body = document.querySelector('body');
 var header = document.querySelector(".header")
 var secondSec = document.querySelector(".second-sec");
 // upboxes places
 var secoverp = document.querySelector(".sec-over-p");
 var boxone = document.querySelector(".box-1");
 var toggleButton = document.querySelector("#toggler");
 // second upboxes places
 var togglecheck = document.querySelector("#toggler").checked;//chebox value true
 //function that turns dark mode
 //console.log(togglecheck)

//the comma issue inside the template literal
//returns a promise
fetch(`${api_Url}/Companies`)
.then((response) => response.json())
.then((companies1) => {

    for(var i =0; i < companies1.length; i++){
       
  displayfirst4Boxes(companies1 , i);
    //first validation
    
      first4Validation(companies1[i].netChange , i);
       //second boxes part
       for(var j=0; j< companies1[i].overview.length;j++){
          secondaryBoxes(companies1, i, j)
         
            secondValidation(companies1[i].overview[j].percentage, i)
       }
    }  

}).then(()=>{
toggleButton.addEventListener("click", turnColorToBlack)
}
)

//

function displayfirst4Boxes (companies , i ){
      
    var contentDiv = document.createElement('div');

    var tpl= `
     <div class="up-boxes-dark up-boxes ${companies[i].classes}">
       <div class="upper-part-header-boxes">
           <i><img src="images/${companies[i].topIcon}" alt=""></i> <p>${companies[i].account}</p>
         </div>

         <p class="up-boxes-p1">${companies[i].totalFollowers}</p>
         <p class="up-boxes-p2">${companies[i].typeOfFollowers}</p>
         
         <div class="results-flex">
         <div class="arrows"> <div class ="triangle-up"></div> <div class="triangle-down"></div></div>
         <p class="up-boxes-p3">${Math.abs(companies[i].netChange)} today</p>
       </div>
       </div>
   `

 contentDiv.classList.add('super-flex');
 contentDiv.innerHTML = tpl;
 //place it in
 HTMLResponse.append(contentDiv)   
 }

 function first4Validation(a , i ) {
    if(/*companies1[i].netChange*/ a > 0){
        document.querySelectorAll('.triangle-up')[i].style.visibility = "visible"
        document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(163, 72%, 41%)"
       }
       else{
           document.querySelectorAll('.triangle-down')[i].style.visibility = "visible"
           document.querySelectorAll('.up-boxes-p3')[i].style.color ="hsl(356, 69%, 56%)"
       }
 }

 function secondValidation( a , i){
      //second validations attempt
      if( /*companies1[i].overview[j].percentage*/ a > 0 ){
        //manera de cambiar entre objetos buscar!!!!
        document.querySelectorAll('.triangle-up2')[i].style.visibility = "visible"
        document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(163, 72%, 41%)"
    }
    else{
        document.querySelectorAll('.triangle-down2')[i].style.visibility = "visible"
        document.querySelectorAll('.box-1-lower-p2')[i].style.color ="hsl(356, 69%, 56%)"
    }
 }

//function that turns dark mode
function turnColorToBlack(){
    var upBox = document.querySelectorAll(".up-boxes");//remember is a list of classes will need for each loop to iterate through all of em
    var secBox = document.querySelectorAll(".sec-box");//remember is a list of classes will need for each loop to iterate through all of em
   
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

function secondaryBoxes(companies, i ,j){

    var ContentDiv2 = document.createElement('div')
    var tpl2 =  `
    <div class="sec-box-dark sec-box ">
       <div class="box-1-upper">
           <p class="box-1-upper-p">${companies[i].overview[j].upperText}</p>
           <i class="box-1-upper-i"><img src="images/${companies[i].overview[j].lowIcon}" alt=""></i>
       </div>

       <div class="box-1-lower">
           <p class="box-1-lower-p">${companies[i].overview[j].lowerTextValue}</p>

           <div class="results-flex-2">
               <div class="arrows-2"><div class ="triangle-up2"></div> <div class="triangle-down2"></div></div>
               <p class="box-1-lower-p2">${Math.abs(companies[i].overview[j].percentage)} %</p>
           </div>

       </div>
   </div>

   `
     //let tpl2 = companies1.map( item => `content`).join('')
     ContentDiv2.classList.add('super-flex')
     ContentDiv2.innerHTML = tpl2;
     lowBoxes.append(ContentDiv2);
 }
 





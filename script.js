const mobileContainer=document.querySelector(".mobile-container");

//input
const input=document.querySelector(".input");

//search button
const searchBtn=document.getElementById("searchBtn");

//Display Container
const displayContainer=document.querySelector(".display-container");
const mealRecipe=document.querySelector(".mealRecipe");
const mealName=document.querySelector(".mealName");

//heartIcon

const heartIcon=document.querySelector(".bi");

//favImg
const favImg=document.querySelector(".favImg");

//favImgs
const favImgs=document.querySelectorAll(".favImgs");

//packs
const packs=document.querySelectorAll(".pack");

//pop-up
const popUp=document.querySelector(".pop-up");

//.redRemoveIcon

//backButton
const backButton=document.querySelector(".backButton");


let bgImg;
let randomImg;
let searchImg;
let check=false;
let a=0;
let i=0
let randomImginfo;
let randomImgObj;
let checkMeal;
const getStartedBtn=document.querySelector(".btn1");
async function imgLoad(){


    const bgImgInfo=await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const bgImgObj= await bgImgInfo.json();

    bgImg= await bgImgObj.meals[0]

     randomImginfo= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   randomImgObj= await randomImginfo.json();

   randomImg= await randomImgObj.meals[0]

    mobileContainer.style.background=`rgba(0, 0, 0, 0.54) url(${bgImg.strMealThumb})`

}

imgLoad()



getStartedBtn.addEventListener("click",openRecipe);

heartIcon.addEventListener("click",addMeal);

packs.forEach(element => {

  const removeImg=document.createElement("img");
removeImg.src="remove.png";
removeImg.setAttribute("class","removeBtn");

element.appendChild(removeImg);
removeImg.style.opacity='0';

  element.addEventListener("mouseover",()=>{
    removeImg.style.opacity='1';
  })
  element.addEventListener("mouseleave",()=>{
    removeImg.style.opacity='0';
  })
removeImg.addEventListener("click",()=>{
favImg.removeChild(element)
})

});

input.value='';

let mealSearch='';
mealRecipe.addEventListener("click",showInstructions);

input.addEventListener("input",()=>{
mealSearch=input.value;
})

{/* <div class="recipes">
<div class="randomRecipe">
  <h4 class="recipeHead">Day Of The Recipe</h4>
  <img class="mealRecipe" src="" alt="" />
  <p class="mealName"></p>
</div>
</div> */}

let inputValue='';

const recipes =document.querySelector(".recipes");
const recipeHead=document.querySelector(".recipeHead");
const randomRecipe=document.querySelector(".randomRecipe")

let mealCheck;
let k=0;
// function removeElm(){

// }
const notAvailable=document.querySelector(".notAvailable");

searchBtn.addEventListener("click",searchImgFun);

 async function searchImgFun(){
if(mealCheck != mealSearch){

  mealCheck=mealSearch;
  const searchInfo= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`)
  const searchImgObj= await searchInfo.json();
  
  const exRandomRecipe=document.querySelectorAll(".exRandomRecipe")
  exRandomRecipe.forEach((element)=>{
    element.style.display='flex';
  })

  const heartSymbols=document.querySelectorAll(".hearts")
  // console.log(exRandomRecipe);
  
  if(k>0){
    exRandomRecipe.forEach((element)=>{
recipes.removeChild(element)
    })
heartSymbols.forEach((element)=>{
  recipes.removeChild(element);
})
  }
  let j=1
  let i=searchImgObj.meals.length;
  if(mealSearch=='')
  {
    searchImg=searchImgObj.meals[0]
    notAvailable.innerText=''
    randomRecipe.style.display='flex'
    mealRecipe.src=`${randomImg.strMealThumb}`
mealRecipe.id=`${randomImg.strMeal}`
mealRecipe.alt=`${randomImg.strInstructions}`
mealName.innerText=`${randomImg.strMeal}`
recipeHead.innerText=`Recipe of the Day`

mealRecipe.addEventListener("click",()=>{
popUp.style.display='flex';
displayContainer.style.display='none';
  
  popUp.innerHTML =
  `
  <img src='remove2.png' class='redRemoveIcon' alt='removeButton' onclick="backToMenu()"/>
  <img class="mealRecipe recipeImg" src="${mealRecipe.src}" alt="${mealRecipe.id}"/>
  <p class="mealName recipeName">${mealRecipe.id}</p>
  <h4 class='procedure'>Prodedure :</h4>
  <p class='strInstructions'>${mealRecipe.alt}</p>'
  `
})

  }

else if((searchImgObj.meals != null))
  {
    recipes.scrollTo(0,0)
notAvailable.innerText=''
mealCheck=mealSearch
randomRecipe.style.display='flex'
    // recipes.innerText=``
  
inputValue=mealSearch;
searchImg=searchImgObj.meals[0]

// console.log(searchImgObj.meals)
// console.log(searchImg);

mealRecipe.src=`${searchImg.strMealThumb}`
mealRecipe.id=`${searchImg.strMeal}`
mealRecipe.alt=`${searchImg.strInstructions}`
mealName.innerText=`${searchImg.strMeal}`
recipeHead.innerText=`Includes '${mealSearch}'`


mealRecipe.addEventListener("click",()=>{
  popUp.style.display='flex';
  displayContainer.style.display='none';
  
  popUp.innerHTML =
  `
  <img src='remove2.png' class='redRemoveIcon' alt='removeButton' onclick="backToMenu()"/>
  <img class="mealRecipe recipeImg" src="${mealRecipe.src}" alt="${mealRecipe.id}"/>
  <p class="mealName recipeName">${mealRecipe.id}</p>
  <h4 class='procedure'>Prodedure :</h4>
  <p class='strInstructions'>${mealRecipe.alt}</p>'
  `
})

heartIcon.style.color='white'



{/* <i class="fa-solid fa-heart"></i> */}

while(j<i)
{

const heartElm=document.createElement("i");
const randomRecipeElm=document.createElement("div")
const recipeHeadElm=document.createElement("h4");
const mealRecipeElm=document.createElement("img");
const mealNameElm=document.createElement("p")

// heartElm.setAttribute("xmlns","http://www.w3.org/2000/svg")o

// heartElm.setAttribute('width','16')
// heartElm.setAttribute('height','16')
// heartElm.setAttribute('fill','currentColor')
heartElm.setAttribute("class",'fa-solid fa-heart hearts')

heartElm.setAttribute("id",`${searchImgObj.meals[j].strMeal}`)
heartElm.setAttribute("alt",`${searchImgObj.meals[j].strInstructions}`)
heartElm.setAttribute("src",`${searchImgObj.meals[j].strMealThumb}`)
// heartElm.setAttribute('viewBox','0 0 16 16')

// heartElm.innerHTML=`<path
// fill-rule="evenodd"
// d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
// />`

randomRecipeElm.id=`${searchImgObj.meals[j].strMeal}`
randomRecipeElm.setAttribute("class","randomRecipe exRandomRecipe");
recipeHeadElm.setAttribute("class","recipeHead");
mealRecipeElm.setAttribute('class',"mealRecipe")
mealNameElm.setAttribute("class","mealName")

mealRecipeElm.src=`${searchImgObj.meals[j].strMealThumb}`
mealRecipeElm.alt=`${searchImgObj.meals[j].strInstructions}`
mealRecipeElm.id=`${searchImgObj.meals[j].strMeal}`
mealNameElm.innerText=`${searchImgObj.meals[j].strMeal}`
recipeHeadElm.innerText=`Includes '${mealSearch}'`
// recipeHead.innerText=`${mealSearch}`

randomRecipeElm.appendChild(recipeHeadElm);
randomRecipeElm.appendChild(mealRecipeElm);
randomRecipeElm.appendChild(mealNameElm);
// svg.style.color='white'
recipes.insertBefore(heartElm,heartIcon);
recipes.insertBefore(randomRecipeElm,heartIcon);
j++;
}
k++;
}
  else if((searchImgObj.meals==null)&&(mealSearch !='')){
    recipes.scrollTo(0,0)
    const exRandomRecipe2=document.querySelectorAll(".exRandomRecipe")
    notAvailable.innerText="Sorry,the Meal is not available！"
exRandomRecipe2.forEach((element)=>{
  element.style.display='none'
})
randomRecipe.style.display='none'
  }

const ImgElm2=document.querySelectorAll(".mealRecipe");

ImgElm2.forEach((element)=>{
    
    element.addEventListener("click",()=>{
    popUp.style.display='flex'
    displayContainer.style.display='none'

    popUp.innerHTML =

    `
    <img src='remove2.png' class='redRemoveIcon' alt='removeButton' onclick="backToMenu()"/>
    <img class="mealRecipe recipeImg" src="${element.src}" alt="${element.id}"/>
    <p class="mealName recipeName">${element.id}</p>
    <p class='strInstructions'>${element.alt}</p>'

    `

    
})

})

check=true

// let tempElm;

    const heartSymbol=document.querySelectorAll(".hearts")
// console.log(heartSymbol)
heartSymbol.forEach((hearts)=>{

    hearts.addEventListener("click",()=>{
     
      let attributeValue1 = hearts.getAttribute('src');
      let attributeValue2 = hearts.getAttribute('alt');
     
      const divElm1=document.createElement('div');
      const imgElm1=document.createElement("img");
      const h6Elm1=document.createElement("h6");
 
    // recipeHead.innerText='Recipe of the Day'

    if(check){

      hearts.style.color='gold'
      check=false;
    divElm1.setAttribute("class",'pack');
    divElm1.setAttribute("id",`${hearts.id} 1`)
    imgElm1.setAttribute("class","favImgs");

        imgElm1.src=`${attributeValue1}`;
      imgElm1.id=`${hearts.id}`
      imgElm1.alt=`${attributeValue2}`
// console.log(attributeValue1)
// console.log(attributeValue2)
console.log(imgElm1.id)
let a=0;
    divElm1.appendChild(imgElm1);
    h6Elm1.innerText=`${imgElm1.id}`;
    divElm1.appendChild(h6Elm1);
favImg.appendChild(divElm1);
   
   const removeBtn2=document.createElement("img");
  removeBtn2.src="remove.png";
  removeBtn2.setAttribute("class","removeBtn");
  divElm1.appendChild(removeBtn2);
  
  removeBtn2.style.opacity='0';
  
  divElm1.addEventListener("mouseover",()=>{
    removeBtn2.style.opacity='1';
  })
  divElm1.addEventListener("mouseleave",()=>{
    removeBtn2.style.opacity='0';
  })
  removeBtn2.addEventListener("click",()=>{
    favImg.removeChild(divElm1)
recipes.removeChild(hearts);
  check=true;
  })

  // tempElm=divElm1;
  const exRandomRecipe3=document.querySelectorAll(".exRandomRecipe")

while(a<(exRandomRecipe3.length)){
if(imgElm1.id==exRandomRecipe3[a].id){
recipes.removeChild(exRandomRecipe3[a])
check=true;
hearts.style.display='none';
break;
}
a++;
}
  // if(hearts.style.color='white'){
  //   favImg.removeChild(divElm1)
  //   check=true;
  // }
  imgElm1.addEventListener("click",()=>{
    popUp.style.display='flex'
    displayContainer.style.display='none'
    popUp.innerHTML =

    `
    <img src='remove2.png' class='redRemoveIcon' alt='removeButton' onclick="backToMenu()"/>
    <img class="mealRecipe recipeImg" src="${imgElm1.src}" alt="${imgElm1.id}"/>
    <p class="mealName recipeName">${imgElm1.id}</p>
    <p class='strInstructions'>${imgElm1.alt}</p>'
    `
  })
}

 })
  })
}
}




async function reloadFun(){
  randomImginfo= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  randomImgObj= await randomImginfo.json();
  randomImg= await randomImgObj.meals[0]
}


async function openRecipe(){
displayContainer.style.display='flex';
mobileContainer.style.display='none';
mealRecipe.src=`${randomImg.strMealThumb}`
mealName.innerText=`${randomImg.strMeal}`
heartIcon.style.color='white'
}

let detectingMeal;

async function appendFavImg(divElm){
  favImg.appendChild(divElm);
}

async function addMeal(){ 

  const divElm=document.createElement('div');
    const imgElm=document.createElement("img");
    const h6Elm=document.createElement("h6");
check=true
recipeHead.innerText='Recipe of the Day'
if(check)
{
    heartIcon.style.color='gold'
    check=false;
}


if(detectingMeal != `${randomImg.strMeal}`)
{
      divElm.setAttribute("class",'pack');
    imgElm.setAttribute("class","favImgs");
detectingMeal=randomImg.strMeal
    imgElm.src=`${randomImg.strMealThumb}`;
    imgElm.id=`${randomImg.strMeal}`
    imgElm.alt=`${randomImg.strInstructions}`
    divElm.appendChild(imgElm);
    h6Elm.innerText=`${randomImg.strMeal}`;
    divElm.appendChild(h6Elm);
await appendFavImg(divElm)

await reloadFun();

await openRecipe();

const removeBtn2=document.createElement("img");
removeBtn2.src="remove.png";
removeBtn2.setAttribute("class","removeBtn");
divElm.appendChild(removeBtn2);

removeBtn2.style.opacity='0';


divElm.addEventListener("mouseover",()=>{
  removeBtn2.style.opacity='1';
})
divElm.addEventListener("mouseleave",()=>{
})
removeBtn2.addEventListener("click",()=>{
favImg.removeChild(divElm);
})

imgElm.addEventListener("click",()=>{
  popUp.style.display='flex'
    displayContainer.style.display='none'
    popUp.innerHTML =

    `
    <img src='remove2.png' class='redRemoveIcon' alt='removeButton' onclick="backToMenu()"/>
    <img class="mealRecipe recipeImg" src="${imgElm.src}" alt="${imgElm.id}"/>
    <p class="mealName recipeName">${imgElm.id}</p>
    <p class='strInstructions'>${imgElm.alt}</p>'
    `
})

}
// svg.style.color='white'
}

const removeIcon=document.querySelector(".redRemoveIcon");

favImgs.forEach((element)=>{
  element.addEventListener("click",()=>{
    popUp.style.display='flex'
    displayContainer.style.display='none'
    popUp.innerHTML =
    `
    <img src='remove2.png' class='redRemoveIcon' alt='removeButton' onclick="backToMenu()"/>
    <img class="mealRecipe recipeImg" src="${element.src}" alt="${element.id}"/>
    <p class="mealName recipeName">${element.id}</p>
    <p class='strInstructions'>${element.alt}</p>'
    `
  })
  
  // element.addEventListener("click",()=>{
    
  // })
})

function showInstructions(){
  popUp.style.display='flex';
displayContainer.style.display='none';

popUp.innerHTML =
`
<img src='remove2.png' class='redRemoveIcon' alt='removeButton' onclick="backToMenu()"/>
<img class="mealRecipe recipeImg" src="${randomImg.strMealThumb}" alt="${randomImg.strMeal}"/>
<p class="mealName recipeName">${randomImg.strMeal}</p>
<h4 class='procedure'>Prodedure :</h4>
<p class='strInstructions'>${randomImg.strInstructions}</p>
`
// removeIcon.addEventListener("click",()=>{
//   console.log("clicked")
// })
}


function backToMenu(){
  popUp.style.display='none';
  displayContainer.style.display='flex';
}

backButton.addEventListener("click",()=>{
  // 
  // location.reload()
  displayContainer.style.display='none';
  mobileContainer.style.display='flex';
})

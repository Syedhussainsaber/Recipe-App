let image=document.getElementsByClassName("image")[0];
let button=document.getElementsByTagName("button")[0];
let mealName=document.getElementsByTagName("h2")[0];

button.addEventListener("click",loadImg);
async function loadImg(){
    const img = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const randImg= await img.json()
    const mealImg=randImg.meals[0]
    image.innerHTML=` <img src="${mealImg.strMealThumb}" alt="${mealImg.strMeal}">`
mealName.innerText=`${mealImg.strMeal}`
// console.log(mealImg);
}
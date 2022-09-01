addEventListener('DOMContentLoaded', (event) => {


function getAnimal(){
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    let image = document.querySelector('img.card-img')
    let animalName = document.querySelector('h5#nameOfAni')
    let animalDiet = document.querySelector('p#animalDiet')
    let animalInfo = document.querySelector('p#animalInfo')
  let geo = document.querySelector('p#geo-range')
    image.src = data.image_link
    animalName.innerText = data.name
    animalInfo.innerText = `Class of animal is ${data.animal_type}`
    animalDiet.innerText = `Diet consists of ${data.diet}`
   geo.innerText = `This type of ${data.animal_type} is found in ${data.geo_range}`
   
})
}
function run(){
    let butn = document.querySelector('generate')
    butn = document.addEventListener('click', ()=>{
       console.log('waaj')
     getAnimal();
    })
       
}

run()



});

onDOMContentLoaded = (event) => { };
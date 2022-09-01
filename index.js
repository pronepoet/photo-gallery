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
    let btn = document.querySelector('button.btn')
    image.src = data.image_link
    animalName.innerText = data.name
    animalInfo.innerText = `Class of animal is ${data.animal_type}`
    animalDiet.innerText = `Diet consists of ${data.diet}`
   
   
})
}

btn = document.addEventListener('click', (event)=>{
    event.preventDefault();
 getAnimal();
})
   




});

onDOMContentLoaded = (event) => { };
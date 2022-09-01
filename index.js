addEventListener('DOMContentLoaded', (event) => {


function getAnimal(){
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(response => response.json())
    .then(data => {
    let image = document.querySelector('img.card-img')

    image.src = data.image_link
})
}
let btn = document.querySelector('button.btn')
btn = document.addEventListener('click', getAnimal)
   
   




});

onDOMContentLoaded = (event) => { };
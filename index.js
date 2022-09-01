addEventListener('DOMContentLoaded', (event) => {


function getAnimal(){
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(response => response.json())
    .then(data => console.log(data.image_link))
}

getAnimal()


});

onDOMContentLoaded = (event) => { };
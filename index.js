addEventListener('DOMContentLoaded', (event) => {

  let buttonGet = document.querySelector('input#getAnimalss')
      
       
        const fetchAnimal = fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        let image = document.querySelector('img.card-img')
        let animalName = document.querySelector('h5#nameOfAni')
        let animalDiet = document.querySelector('p#animalDiet')
        let animalInfo = document.querySelector('p#animalInfo')
        let animalHabitat = document.querySelector('p.habitat')
      let geo = document.querySelector('p#geo-range')
        image.src = data.image_link
        animalName.innerText = data.name
        animalInfo.innerText = `Class of animal is ${data.animal_type}`
        animalDiet.innerText = `Diet consists of ${data.diet}`
       geo.innerText = `This type of ${data.animal_type} is found in ${data.geo_range}`
       animalHabitat.innerText = `This ${data.animal_type}'s habitat is ${data.habitat}`
     
 
      
     })
     buttonGet = document.addEventListener('click', (event)=>{
        event.preventDefault()
        
       fetchAnimal
       
    })
    
   // jquery code
   let btnShow = document.querySelector('button#show_content')
   $(document).ready(function(){
   $(btnShow).click(function(){
     $().hide();
   })

   })
   //end of jquery
    
    });
    
    onDOMContentLoaded = (event) => { };
addEventListener('DOMContentLoaded', (event) => {

  
  // gets the first 2 animal data
      function get1(){
        const fetchAnimal1 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/1')
        .then(response => response.json())
        .then(data => {
       
            let image1 = document.querySelector('img#image1')
            
            let animalName1 = document.querySelector('h5.animal1')
            let animalDiet1 = document.querySelector('p#animalDiet1')
            let animalHabitat1 = document.querySelector('p#animalHabitat1')
          

            image1.src = data[0].image_link
          
            animalName1.innerHTML = data[0].name
          //   animalInfo.innerText = `Class of animal is ${data.animal_type}`
          //   animalDiet.innerText = `Diet consists of ${data.diet}`
          //  geo.innerText = `This type of ${data.animal_type} is found in ${data.geo_range}`
          //  animalHabitat.innerText = `This ${data.animal_type}'s habitat is ${data.habitat}`
   
           console.log(data[0])})
      }


      //  gets the 2nd batch
      function get2(){
        const fetchAnimal2 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand2')
        .then(response => response.json())
        .then(data => {
         let image2 = document.querySelector('img#image2')
         image2.src = data[0].image_link
        })
      }

      // gets the third batch
   
function get3(){
  const fetchAnimal3 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand3')
  .then(response => response.json())
  .then(data => {
   let image3 = document.querySelector('img#image3')
   image3.src = data[0].image_link
  })
}

// get's the fourth batch
 function get4(){

  const fetchAnimal4 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand4')
  .then(response => response.json())
  .then(data => {
 let image4 = document.querySelectro('img#image4')
 image4.src= data[0].image_link
  })
 }

 get1()
 get2()
 get3()
 get4()

  

 

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
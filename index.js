addEventListener('DOMContentLoaded', (event) => {

  // did you know section


  // gets the first 2 animal data
      function get1(){
        const fetchAnimal1 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/1')
        .then(response => response.json())
        .then(data => {
          let image1 = document.querySelector('img#image1') 
          let animalName1 = document.querySelector('h5.animal1')
          let animalDiet1 = document.querySelector('p#animalDiet1')
          let animalHabitat1 = document.querySelector('p#animalHabitat1')
          let didYou = document.querySelector('div.ddy')
          let h3 = document.createElement('h3')
          didYou.appendChild(h3)
          h3.textContent = `Did you know the ${data[0].name}'s diet consists of ${data[0].diet} and is found in ${data[0].geo_range}`
          console.log(h3)
            image1.src = data[0].image_link
            animalName1.innerHTML = data[0].name
          //   animalInfo.innerText = `Class of animal is ${data.animal_type}`
          //   animalDiet.innerText = `Diet consists of ${data.diet}`
          //  geo.innerText = `This type of ${data.animal_type} is found in ${data.geo_range}`
          //  animalHabitat.innerText = `This ${data.animal_type}'s habitat is ${data.habitat}`
           console.log(data[1])})
      }


      //  gets the 2nd batch
      function get2(){
        const fetchAnimal2 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/2')
        .then(response => response.json())
        .then(data => {
          let animalName2 = document.querySelector('h5.animal2')
          animalName2.innerHTML = data[0].name
         let image2 = document.querySelector('img#image2')
         image2.src = data[0].image_link
        })
      }

      // gets the third batch
   
function get3(){
  const fetchAnimal3 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/3')
  .then(response => response.json())
  .then(data => {
    let animalName3 = document.querySelector('h5.animal3')
    animalName3.innerHTML = data[0].name
   let image3 = document.querySelector('img#image3')
   image3.src = data[0].image_link
  })
}

// get's the fourth batch
 function get4(){

  const fetchAnimal4 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/4')
  .then(response => response.json())
  .then(data => {
    let animalName4 = document.querySelector('h5.animal4')
    animalName4.innerHTML = data[0].name
 let image4 = document.querySelector('img#image4')
 image4.src= data[0].image_link
  })
 }

 function get5(){

  const fetchAnimal4 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/5')
  .then(response => response.json())
  .then(data => {
    let animalName5 = document.querySelector('h5.animal5')
    animalName5.innerHTML = data[0].name
 let image5 = document.querySelector('img#image5')
 image5.src= data[0].image_link
  })
 }

 function get6(){

  const fetchAnimal4 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/6')
  .then(response => response.json())
  .then(data => {
    let animalName6 = document.querySelector('h5.animal6')
    animalName6.innerHTML = data[0].name
 let image6 = document.querySelector('img#image6')
 image6.src= data[0].image_link
  })
 }

 function get7(){

  const fetchAnimal4 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/7')
  .then(response => response.json())
  .then(data => {
    let animalName7 = document.querySelector('h5.animal7')
    animalName7.innerHTML = data[0].name
 let image7 = document.querySelector('img#image7')
 image7.src= data[0].image_link
  })
 }
 function get8(){

  const fetchAnimal4 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
  .then(response => response.json())
  .then(data => {
    let animalName8 = document.querySelector('h5.animal8')
    animalName8.innerHTML = data[0].name
 let image8 = document.querySelector('img#image8')
 image8.src= data[0].image_link
  })
 }

 get1()
 get2()
 get3()
 get4()
 get5()
 get6()
 get7()
 get8()

  
   // jquery code
   let btnShow = document.querySelector('button#show_content')
   let extraAnimals = document.querySelector('div#extra')
   let mayai = document.querySelector('a#easterEgg')
   $(document).ready(()=>{
   $(btnShow).click(()=>{
     $(btnShow).hide();
     $(extraAnimals).slideToggle()
     $(mayai).show()
   })
$(mayai).click(()=>{
  $(mayai).hide()
    $('.more').slideToggle()
})

   })
   //end of jquery
    
    });
    
    onDOMContentLoaded = (event) => { };
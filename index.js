addEventListener('DOMContentLoaded', (event) => {

  // did you know section


  // gets the first 2 animal data
      function get1(){
        const fetchAnimal1 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/1')
        .then(response => response.json())
        .then(data => {
          let image1 = document.querySelector('img#image1') 
          let animalName1 = document.querySelector('h5.animal1')
          let animalClass1 = document.querySelector('p.animalClass1')
          let didYou = document.querySelector('div.ddy')
          let h3 = document.createElement('h3')
          didYou.appendChild(h3)
          h3.textContent = `Did you know the ${data[0].name} is a ${data[0].animal_type} who's diet consists of ${data[0].diet} and is found in ${data[0].geo_range}. They typically grow upto a lenght of ${data[0].length_max} feet and can live upto ${data[0].lifespan} years!`
          console.log(data)
            image1.src = data[0].image_link
            animalName1.innerHTML = data[0].name
            animalClass1.innerHTML = data[0].animal_type
      })
      }


      //  gets the 2nd batch
      function get2(){
        const fetchAnimal2 = fetch('https://zoo-animal-api.herokuapp.com/animals/rand/2')
        .then(response => response.json())
        .then(data => {
          let animalName2 = document.querySelector('h5.animal2')
          let animalClass2 = document.querySelector('p.animalClass2')
          animalName2.innerHTML = data[0].name
         let image2 = document.querySelector('img#image2')
         image2.src = data[0].image_link
         animalClass2.innerHTML = data[0].animal_type
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
   let animalClass3 = document.querySelector('p.animalClass3')
   animalClass3.innerHTML = data[0].animal_type
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
 let animalClass4 = document.querySelector('p.animalClass4')
 animalClass4.innerHTML = data[0].animal_type
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
 let animalClass5 = document.querySelector('p.animalClass5')
 animalClass5.innerHTML = data[0].animal_type
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
 let animalClass6 = document.querySelector('p.animalClass6')
 animalClass6.innerHTML = data[0].animal_type
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
 let animalClass7 = document.querySelector('p.animalClass7')
 animalClass7.innerHTML = data[0].animal_type
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
 let animalClass8 = document.querySelector('p.animalClass8')
 animalClass8.innerHTML = data[0].animal_type
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
    
       // code for button for scrolling to top
       let mybutton = document.getElementById("btn-back-to-top");

       // When the user scrolls down 20px from the top of the document, show the button
       window.onscroll = function () {
         scrollFunction();
       };
       
       function scrollFunction() {
         if (
           document.body.scrollTop > 20 ||
           document.documentElement.scrollTop > 20
         ) {
           mybutton.style.display = "block";
         } else {
           mybutton.style.display = "none";
         }
       }
       // When the user clicks on the button, scroll to the top of the document
       mybutton.addEventListener("click", backToTop);
       
       function backToTop() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
       }
    });



    
    onDOMContentLoaded = (event) => { };
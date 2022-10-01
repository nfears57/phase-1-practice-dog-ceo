// // put the images inside container
// // target the DOM element that I need to modify
// // fetch the Url 
// // on page load, fetches the images using th url above
// // adds image elements to the DOM for each image
// // 0 :"https://images.dog.ceo/breeds/spaniel-welsh/n02102177_575.jpg"
// // 1 : "https://images.dog.ceo/breeds/pembroke/n02113023_724.jpg"
// // 2 : "https://images.dog.ceo/breeds/dingo/n02115641_4970.jpg"
// // 3 : "https://images.dog.ceo/breeds/pyrenees/n02111500_1603.jpg"
//         // render to the DOM 
//         // data.message
//         // forEach
//         // create Element
//         // append
//         // debugger
//     // 0. iterate through the array
//         // arr.forEach(el => console.log(el))
//       // 1. Create the Element
//          // 2. Put the picture in the element
//         //src
//       // 3. append the picture to the container
//         // breed.append(newBreedListItem)
// console.log('%c HI', 'color: firebrick') 
     
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// document.addEventListener("DOMContentLoaded", loadPage)

// function loadPage() {
//   const dogImageContainer = document.getElementById("dog-image-container")
//   const dogUl = document.getElementById("dog-breeds")

//   fetch(imgUrl)
//   .then(res => res.json())
//   .then((data) => renderImages(data))

//   function renderImages(images){
//     images.message.forEach((img) =>{
//       const dogImage = document.createElement("img")
//       dogImage.src = img;
//       dogImageContainer.append(dogImage)
//     })
//   }

//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//     fetch(breedUrl)
//     .then(res => res.json())
//     .then((data) => renderBreeds(data))

//     function renderBreeds(breeds){
//       for(const breed in breeds.message){
//         const li = document.createElement("li")
//         li.textContent = breed
//         dogUl.append(li)
//         li.addEventListener("click", e => {
//           e.target.style.color = 'green'
//         })
//       }

//     }
//   }
// console.log('%c HI', 'color: firebrick') 

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// document.addEventListener("DOMContentLoaded", loadPage);

// function loadPage() {
//     const dogImageContainer = document.getElementById("dog-image-container")
//     const dogUl = document.getElementById("dog-breeds")

//     fetch(imgUrl)
//     .then(response => response.json())
//     .then((data) => renderImages(data))

// function renderImages(images) {

   
//  images.message.forEach((img) =>{
  
  
//   const dogImage = document.createElement("img")
     
//     dogImage.src = img;
//     dogImageContainer.append(dogImage)
//     })
//     }
//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//     fetch(breedUrl)
//         .then((response => response.json()))
//         .then((data) => renderBreeds(data))

//     function renderBreeds(breeds) {

//         for (const breed in breeds.message) {
//         const li = document.createElement("li")
//         li.textContent = breed
//         dogUl.append(li)
//         li.addEventListener("click", e => {
//           e.target.style.color = 'blue'
//     })  
//   }
//   }
// }

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// document.addEventListener("DOMContentLoaded", loadPage)

// function loadPage(){
// const dogImageContainer = document.getElementById('dog-image-container')
// const dogUl = document.getElementById('dog-breeds')

// fetch(imgUrl)
// .then(res => res.json())
// .then((data) => renderImages(data))

// function renderImages(images){
//   images.message.forEach((img)=> {
//     const dogImage = document.createElement('img')
//     dogImage.src = img
//     dogImageContainer.append(dogImage)
//   })
// }

// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// fetch(breedUrl)
// .then(res => res.json())
// .then((data) => renderBreeds(data))

// function renderBreeds(breeds) {
// for (const breed in breeds.message) {
//   const li = document.createElement("li")
//   li.textContent = breed
//   dogUl.append(li)
//   li.addEventListener("click", e => {
//     e.target.style.color = 'magenta'
//   })
// }
// }
// }
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", loadPage)

function loadPage(){
  const dogImageContainer = document.getElementById('dog-image-container')
  const dogUl = document.getElementById('dog-breeds')

  fetch(imgUrl)
  .then(res => res.json())
  .then((data) => renderImage(data))

  function renderImage(images){
    images.message.forEach((img) => {
      const dogImage = document.createElement('img')
      dogImage.src = img
      dogImageContainer.append(dogImage)
    })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(res => res.json())
    .then((data) => renderBreeds(data))

    function renderBreeds(breeds){
      for(const breed in breeds.message){
        const li = document.createElement("li")
        li.textContent = breed
        dogUl.append(li)
        li.addEventListener("click", e =>{
          e.target.style.color = "brown"
        })
      }
    }
  }


}
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');
 
// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;
 
// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 2000);
// let container = document.querySelector(".container");
// let card = document.querySelectorAll(".card");

// const cardCount = card.length;
// let activeSlide = 0;

// setInterval(()=>{
//       card[activeSlide].classList.remove('active');
//       activeSlide++;
//       if(activeSlide == cardCount){
//             activeSlide = 0;
//       }
//       card[activeSlide].classList.add('active');
// },2000);


// let count = 0;
// // cards.forEach(function(slide,index){
// //       slide.style.left=`${index*100}%` 
// // })

// function myFun(){
//       cards.forEach(function(curvalue){
//             curvalue.style.transform = `translateX(-${count * 100}%)`
//       })
// }

// setInterval(function(){
//       count++;
//       if(count == cards.length){
//             count = 0;
//       }
//       myFun()
// },3000)

// const slider = document.querySelector('.slider');
// const slides = slider.querySelectorAll('li');
 
// // Store the total number of images
// const slideCount = slides.length;
// let activeSlide = 0;
 
// // To change the images dynamically every 
// // 5 Secs, use SetInterval() method
// setInterval(() => {
//   slides[activeSlide].classList.remove('active');
//   activeSlide++;
//   if (activeSlide === slideCount) {
//     activeSlide = 0;
//   }
//   slides[activeSlide].classList.add('active');
// }, 2000);


// // let cards = document.querySelectorAll(".card");

// // let count = 0;
// // // cards.forEach(function(slide,index){
// // //       slide.style.left=`${index*100}%` 
// // // })

// // function myFun(){
// //       cards.forEach(function(curvalue){
// //             curvalue.style.transform = `translateX(-${count * 100}%)`
// //       })
// // }

// // setInterval(function(){
// //       count++;
// //       if(count == cards.length){
// //             count = 0;
// //       }
// //       myFun()
// // },3000)
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('Pic_Animation-show');
    }
    if (change.isIntersecting) {
      change.target.classList.add('Pic_Animation-show_Two');
     }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
                                                    /*Y*/
let elements_One = document.querySelectorAll('.Pic_Animation');
let elements_Two = document.querySelectorAll('.Pic_Animation_two');
let elements_Three = document.querySelectorAll('.Pic_Animation_three');
                                                    /*X*/
let elements_Four = document.querySelectorAll('.Pic_Animation_four');
let elements_Five = document.querySelectorAll('.Pic_Animation_five');
for (let elm of elements_One) {
  observer.observe(elm);
}
for (let elm of elements_Two) {
  observer.observe(elm);
}
for (let elm of elements_Three) {
  observer.observe(elm);
}
for (let elm of elements_Four) {
  observer.observe(elm);
}
for (let elm of elements_Five) {
  observer.observe(elm);
}


//Перемотка слайдов
const initSlider = () =>{
  const imagelist = document.querySelector(".slider-wrapper .image-list");
  const slideButton = document.querySelectorAll(".slider-wrapper .slide-button");
  slideButton.forEach(button =>{
    button.addEventListener("click", ()=>{
      const direction = button.id === "prev-slide" ? - 1 : 1;
      const scrollAmount = imagelist.clientWidth * direction;
      imagelist.scrollBy({left: scrollAmount, behavior:"smoth"})
    });
  });
}
window.addEventListener("load", initSlider);
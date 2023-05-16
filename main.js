const images = document.querySelectorAll(".images");
const previousBtn = document.querySelector(".btn_1");
const nextBtn = document.querySelector(".btn_2");
let increasingNumberOfImages = 1;

nextBtn.addEventListener("click", () => {
  if (increasingNumberOfImages == images.length) {
    increasingNumberOfImages = 0;
    for (let index = 0; index < images.length; index++) {
      images[index].style.display = 'none' 
    }
  }
  images[increasingNumberOfImages].style.display = 'flex'
  increasingNumberOfImages += 1;
});
previousBtn.addEventListener("click", () => { 
  if (increasingNumberOfImages == 1) { 
    increasingNumberOfImages = images.length;
    images[increasingNumberOfImages -1].style.display = 'flex'
  }
 else{
    increasingNumberOfImages -= 1;
    images[increasingNumberOfImages - 1];
    for (let index = images.length-1; index > -1; index--) {
      images[index].style.display = 'none' 
    }
  images[increasingNumberOfImages -1].style.display = 'flex'}
});

increasingNumberOfImages = 0
function automaticSlide(){ 
  increasingNumberOfImages++    
  if (increasingNumberOfImages > images.length) {
    increasingNumberOfImages = 1
    for (let index = 0; index < images.length; index++) {
      images[index].style.display = 'none' 
    }
  }
  images[increasingNumberOfImages - 1].style.display = 'flex'
  setTimeout(automaticSlide, 2000);
}
automaticSlide()


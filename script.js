
let images = ['./images/image-john.jpg', './images/image-tanya.jpg'];
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let idx = 0;
let img = document.querySelector('.imgContainer img');

function changeToPrevImage() {
   idx--;
   if (idx < 0) {
    idx = (images.length - 1)
   }
   img.src = images[idx];
    
}

function changeToNextImage() {
    idx++;
    if (idx === images.length) {
        idx = 0;
    }
    img.src = images[idx];
}

prevBtn.addEventListener('click', changeToPrevImage);
nextBtn.addEventListener('click', changeToNextImage);


// let images = ['./images/image-john.jpg', './images/image-tanya.jpg'];
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let quote = document.querySelector('.testimony-Header h1');
console.log(quote);
let idx = 1;
let img = document.querySelector('.imgContainer img');

function changeToPrevImage() {
   idx--;
   if (idx < 0) {
    idx = (images.length - 1)
   }
   img.src = images[idx];
   return img;
}

function changeToNextImage() {
    idx++;
    if (idx === images.length) {
        idx = 0;
    }
    img.src = images[idx];
    return img;

}

// window.onload = function() {
//     if (images[0]) {
        
//     }
// }

prevBtn.addEventListener('click', changeToPrevImage);
nextBtn.addEventListener('click', changeToNextImage);






const testimonies = [
    {
        id: 'Tanya Sinclair',
        quote: `I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future.`,
        occupation: 'UX Engineer',
        imageURL: './images/image-tanya.jpg'
    },
    
    {
        id: 'John Tarkpor',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        occupation: 'Junior Front-end Developer',
        imageURL: './images/image-john.jpg'
    }
]

for (const test of testimonies) {
    console.log(test);
}
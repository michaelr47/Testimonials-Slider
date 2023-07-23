
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const quote = document.querySelector('.testimony-Header h1');
const personName = document.querySelector('.name');
const occupation = document.querySelector('.occupation');
const img = document.querySelector('.imgContainer img');
let idx = 0;


const testimonies = [
    {
        id: 'Tanya Sinclair',
        quote: `" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. " `,
        occupation: 'UX Engineer',
        imageURL: './images/image-tanya.jpg'
    },
    
    {
        id: 'John Tarkpor',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        occupation: 'Junior Front-end Developer',
        imageURL: './images/image-john.jpg'
    }
]

function changeToPrevImage() {
   idx--;

   if (idx < 0) {
    idx = (testimonies.length - 1)
   }
   
   quote.innerText = testimonies[idx].quote;
   personName.innerText = testimonies[idx].id;
   occupation.innerText = testimonies[idx].occupation;
   img.src = testimonies[idx].imageURL;

}

function changeToNextImage() {
    idx++;
    
    if (idx === testimonies.length) {
        idx = 0;
    }

    quote.innerText = testimonies[idx].quote;
    personName.innerText = testimonies[idx].id;
    occupation.innerText = testimonies[idx].occupation;
    img.src = testimonies[idx].imageURL;
}

prevBtn.addEventListener('click', changeToPrevImage);
nextBtn.addEventListener('click', changeToNextImage);

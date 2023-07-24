// previous and next buttons
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
// accessing testimony DOM elements
const quote = document.querySelector(".testimony-Header h1");
const personName = document.querySelector(".name");
const occupation = document.querySelector(".occupation");
const img = document.querySelector(".imgContainer img");
// change slides index
let slidingIdx = 0; 

// testimonies data 
const testimonies = [
  {
    id: "Tanya Sinclair",
    quote: `" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. " `,
    occupation: "UX Engineer",
    imageURL: "./images/image-tanya.jpg",
  },

  {
    id: "John Tarkpor",
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    occupation: "Junior Front-end Developer",
    imageURL: "./images/image-john.jpg",
  },
];

function changeToPrevImage() {
  slidingIdx--;



  if (slidingIdx < 0) {
    slidingIdx = testimonies.length - 1;
  }

  quote.innerText      = testimonies[slidingIdx].quote;
  personName.innerText = testimonies[slidingIdx].id;
  occupation.innerText = testimonies[slidingIdx].occupation;
  img.src              = testimonies[slidingIdx].imageURL;

}

function changeToNextImage() {
  slidingIdx++;

  if (slidingIdx === testimonies.length) {
    slidingIdx = 0;
  }

  quote.innerText      = testimonies[slidingIdx].quote;
  personName.innerText = testimonies[slidingIdx].id;
  occupation.innerText = testimonies[slidingIdx].occupation;
  img.src              = testimonies[slidingIdx].imageURL;
}

prevBtn.addEventListener("click", changeToPrevImage);
nextBtn.addEventListener("click", changeToNextImage);

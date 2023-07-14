let images = ['./images/image-john.jpg', './images/image-tanya.jpg'];

function displayImages(arrOfImages) {
    arrOfImages.forEach((img, i) => {
        let image = document.createElement('img');
        image.src = arrOfImages[i];
        document.body.append(image); 
    })
}

displayImages(images);
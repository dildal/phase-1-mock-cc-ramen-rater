const URL = 'http://localhost:3000/ramens'

// write your code here
document.addEventListener('DOMContentLoaded', () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        data.forEach(ramen => displayRamen(ramen))
    })

    const newRamenForm = document.querySelector('#new-ramen');
    newRamenForm.addEventListener('submit', addRamen);
    newRamenForm.reset();
})

function displayRamen(ramen){
    const ramenMenu = document.querySelector('#ramen-menu');
    const ramenImg = document.createElement('img');
    ramenImg.src = ramen.image;
    ramenImg.addEventListener('click', () => displayRamenDetails(ramen));
    ramenMenu.appendChild(ramenImg);
}

function displayRamenDetails(ramen){
    const ramenImg = document.querySelector('#ramen-detail img');
    ramenImg.src = ramen.image;

    const ramenName = document.querySelector('#ramen-detail h2');
    ramenName.textContent = ramen.name;
    
    const ramenRestaurant = document.querySelector('#ramen-detail h3');
    ramenRestaurant.textContent = ramen.restaurant;

    const ramenRating = document.querySelector('#rating-display');
    ramenRating.textContent = ramen.rating;

    const ramenComment = document.querySelector('#comment-display');
    ramenComment.textContent = ramen.comment;
}

function addRamen(e){
    e.preventDefault();
    const newRamen = {
        name: e.target['new-name'].value,
        restaurant: e.target['new-restaurant'].value,
        image: e.target['new-image'].value,
        rating: e.target['new-rating'].value,
        comment: e.target['new-comment'].value,
    }
    displayRamen(newRamen);
    e.target.reset();
}

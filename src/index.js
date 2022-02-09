const URL = 'http://localhost:3000/ramens'

// write your code here
document.addEventListener('DOMContentLoaded', () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => displayRamen(data))
})

function displayRamen(allRamen){
    const ramenMenu = document.querySelector('#ramen-menu');
    allRamen.forEach(ramen => {
        const ramenImg = document.createElement('img');
        ramenImg.src = ramen.image;
        ramenImg.addEventListener('click', () => displayRamenDetails(ramen));
        ramenMenu.appendChild(ramenImg);
    });
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
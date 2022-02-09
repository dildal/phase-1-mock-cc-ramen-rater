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
        ramenMenu.appendChild(ramenImg)
    })
}
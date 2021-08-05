var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  lineOne.classList.toggle('line-cross');
  lineTwo.classList.toggle('line-fade-out');
  lineThree.classList.toggle('line-cross');
  link.classList.toggle('fade-in');
})

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 40.72458, lng: -73.99678 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

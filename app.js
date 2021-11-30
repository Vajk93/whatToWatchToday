const yearCard = document.getElementById('yearCard');
const movieStyleCard = document.getElementById('movieStyleCard');
const dessertCard = document.getElementById('dessertCard');
const turnBackBtn = document.getElementById('turnBackBtn');

function yearPicker() {
  let randomNumber = Math.floor(Math.random() * 12) + 1;; //there is 12
  yearCard.src = "images/cat_year/év" + randomNumber + ".png";
}
yearCard.addEventListener('click', yearPicker);

function movieStylePicker() {
  let randomNumber = Math.floor(Math.random() * 11) + 1;; //there is 11
  movieStyleCard.src = "images/cat_movie_style/kat" + randomNumber + ".png";
}
movieStyleCard.addEventListener('click', movieStylePicker);

function dessertPicker() {
  let randomNumber = Math.floor(Math.random() * 8) + 1;; //there is 8
  dessertCard.src = "images/cat_dessert/nasi" + randomNumber + ".png";
}
dessertCard.addEventListener('click', dessertPicker);

turnBackCards = () => {
  yearCard.src = "images/cat_year/évszám.hátlap.png";
  movieStyleCard.src = "images/cat_movie_style/kat.hátlap.png";
  dessertCard.src = "images/cat_dessert/nasi.hátlap.png";
}
turnBackBtn.addEventListener('click', turnBackCards);



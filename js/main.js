
const mainImage = document.getElementById("main-image")
const textToGrow = document.getElementById("text-to-grow");
document.getElementById("fade-in-text").classList.add("fade-in");
//string of text then split into array and added through iteration
let textToAdd = "...or maybe just really, REALLY want.";
let textToAddArray = textToAdd.split(" ");

//iterate throught the array of words and add each to the DOM on a timer
addToText = () => {
  for(var i=0; i<textToAddArray.length; i++) {
    let wordToAdd = document.createElement("span");
    textToGrow.appendChild(wordToAdd);
    wordToAdd.classList.add("invisible-text");    
    wordToAdd.innerHTML=`${textToAddArray[i]} `;
    setTimeout(function () {
      wordToAdd.classList.add("fade-in");
    }, 700+i*700);
  }
}
addToText()

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById('target');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

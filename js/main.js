
let ticking = false;
let lastKnownPosition = 0;
let multiplier = window.screen.width/1024


const bringItIn = position => {
  // console.log(multiplier)
  if(position > 100*multiplier){
    document.querySelector("#about").classList.add("slide-in")
  }
  if(position > 280*multiplier){
    document.querySelector("#skills").classList.add("slide-in")
  }
}

window.addEventListener("scroll", e => {
  lastKnownPosition = window.scrollY;

  if(!ticking) {
    window.requestAnimationFrame(function() {
      bringItIn(lastKnownPosition);
      ticking = false;
    });
    ticking= true;
  }
})

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
  const navbarItems = document.querySelectorAll(".navbar-item")
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById('target');
      el.addEventListener('click', () => {
        navbarItems.forEach(item => {
          let menuClick = item.addEventListener("click", function() {
            if($target.classList.contains('is-active')) {
            toggle();
          }
            return navbarItems.forEach(x => x.removeEventListener("click", menuClick))
        }, false)
      })
      toggle();
    })

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    const toggle = () => {
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    }
      });
    };
  });

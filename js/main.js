const textToGrow = document.getElementById("text-to-grow");
document.getElementById("fade-in-text").classList.add("fade-in");
let textToAdd = "...or maybe just really want.";
let textToAddArray = textToAdd.split(" ");
addToText = () => {
  for(var i=0; i<textToAddArray.length; i++) {
    let wordToAdd = document.createElement("span");
    wordToAdd.classList.add("fade-in");
    wordToAdd.innerHTML=`${textToAddArray[i]} `;
    setTimeout(function () {
      textToGrow.appendChild(wordToAdd);
    }, 700+i*700);
  }
}

// const addToFadeIn =

// const addWord(word)
addToText()

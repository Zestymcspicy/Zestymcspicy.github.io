const textToGrow = document.getElementById("fade-in-text");
let textToAdd = "this is my string to add";
let textToAddArray = textToAdd.split(" ");
addToText = () => {
  for(var i=0; i<textToAddArray.length; i++) {
    let wordToAdd = document.createElement("span");
    wordToAdd.innerHTML=`${textToAddArray[i]}`;
    setTimeout(function () {
      textToGrow.append(wordToAdd);
    }, i*1000);
  }
}

// const addToFadeIn =

// const addWord(word)
addToText()

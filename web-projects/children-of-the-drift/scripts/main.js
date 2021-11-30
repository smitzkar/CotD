document.querySelector('li').onclick = function() {
    alert('You found me!'); // only seems to work on the first instance it appears
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sanctuary2.png') {
      myImage.setAttribute('src','images/ark.jpg');
    } else {
      myImage.setAttribute('src','images/sanctuary2.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {   // If myName has no value, run setUserName() again from the start. If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.
      setUserName();
    } else {
      localStorage.setItem('name', myName);    // use localStorage.clear(); to clear local storage =)
      myHeading.textContent = 'Father welcomes you, ' + myName;
    }
  }  
  if(!localStorage.getItem('name')) {  //notice the ! in front of localStorage -> NOT operator -> if not
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Father welcomes you back, ' + storedName; // if there was already a name stored locally -> welcome back!
  }
  myButton.onclick = function() {
    setUserName();
  }

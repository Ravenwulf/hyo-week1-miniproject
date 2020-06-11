let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
let mySubtitle = document.querySelector('h4');
let myStyles =  document.styleSheets[0].href;

myHeading.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/hal.jpg') {
      myImage.setAttribute ('src','../images/raven.png');
      myImage.setAttribute ('width',250);
      myHeading.textContent = 'Ravenr_';
      mySubtitle.textContent = 'Member of secBrkrz';
      document.getElementById('pagestyle').setAttribute('href','style2.css');
    } else {
      myImage.setAttribute ('src','../images/hal.jpg');
      myImage.setAttribute ('width',150);
      myHeading.textContent = 'Marcello Pezzella';
      mySubtitle.textContent = 'CS Student';
      document.getElementById('pagestyle').setAttribute('href','style.css');
    }
    
}
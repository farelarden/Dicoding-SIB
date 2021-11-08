import "./style/style.css";

var counter = 1;
var CafeContainer = document.getElementById("CafeRecommendations");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var Request = new XMLHttpRequest();
  Request.open('GET', 'https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/Belajar%20Fundamental%20Front-End%20Web%20Development/JSON%20File/Cafe-' + counter + '.json');
  Request.onload = function() {
      var ourData = JSON.parse(Request.responseText);
      renderHTML(ourData);
  };
  Request.send();
  counter++;

  if (counter > 5) {
    btn.classList.add("EnoughList");
    alert("There are enough recommendations");
  }
});


const renderHTML = data =>  {
  var htmlString = "";

  for (var i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].rating + " Star Cafe. <br> Located in "+data[i].lokasi+".<br> With their signature drink "+data[i].Favorit;
    htmlString += '.</p>';

  }

  CafeContainer.insertAdjacentHTML('beforeend', htmlString);
}

class ImageFigure extends HTMLElement {
 
  connectedCallback() {
    this.src = this.getAttribute("src") || null;
  
    this.innerHTML = `
      <figure>
        <img src="${this.src}">
      </figure>
    `;
  }
 }
  
 customElements.define("image-figure", ImageFigure);

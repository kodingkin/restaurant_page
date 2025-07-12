const container = document.querySelector("#content");

const headLine = document.createElement("div");
headLine.classList.add("head-line");
headLine.innerText = "Tasty Food and Comfy Place";
container.appendChild(headLine);

const text = document.createElement("div");
text.classList.add("text");
text.innerText = "Come and enjoy nice pizza with good music. Relax yourself after every touch day!";
container.appendChild(text);
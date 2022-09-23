const artiForm = document.querySelector(".article-list__form");
const artiInput = document.querySelector(".article-list__form input");
const artiList = document.querySelector(".article-list__box");

const ARTIS_KEY = "artis";

let Artis = [];

function saveArtis() {
  localStorage.setItem(ARTIS_KEY, JSON.stringify(Artis));
}

function deleteArti(event) {
  const p = event.target.parentElement;
  p.remove();
  Artis = Artis.filter((arti) => arti.id !== parseInt(p.id));
  saveArtis();
}

function checkArti(event, newArtiObj) {
  const p = event.target.parentElement;
  if (newArtiObj.checked === true) {
    p.classList.remove("checked");
    newArtiObj.checked = false;
  } else {
    p.classList.add("checked");
    newArtiObj.checked = true;
  }
  oriArtis = Artis.find((arti) => arti.id !== parseInt(p.id));
  saveArtis();
}

function paintArti(newArtiObj) {
  const p = document.createElement("p");
  p.id = newArtiObj.id;
  p.className = "draggable";
  if (newArtiObj.checked === true) {
    p.classList.add("checked");
  }
  p.draggable = "true";
  const span = document.createElement("span");
  span.innerText = newArtiObj.text;
  const checkbtn = document.createElement("button");
  checkbtn.innerText = "✔️";
  checkbtn.addEventListener("click", function (event) {
    checkArti(event, newArtiObj);
  });
  const Xbtn = document.createElement("button");
  Xbtn.addEventListener("click", deleteArti);
  Xbtn.innerText = "❌";
  p.appendChild(span);
  p.appendChild(checkbtn);
  p.appendChild(Xbtn);
  artiList.prepend(p);
  dragAndDrop();
}

function handleArtiSubmit(event) {
  event.preventDefault();
  const newArti = artiInput.value;
  artiInput.value = "";
  const newArtiObj = {
    text: newArti,
    id: Date.now(),
    checked: false,
    location: "list",
  };
  Artis.push(newArtiObj);
  paintArti(newArtiObj);
  saveArtis();
}

artiForm.addEventListener("submit", handleArtiSubmit);

const savedArtis = localStorage.getItem(ARTIS_KEY);

if (savedArtis !== null) {
  const parsedArtis = JSON.parse(savedArtis);
  Artis = parsedArtis;
  parsedArtis.forEach(paintArti);
}

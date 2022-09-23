const artiForm = document.querySelector(".article-list__form");
const artiInput = document.querySelector(".article-list__form input");
const artiList = document.querySelector(".article-list__box");

let Artis = [];

function paintArti(newArtiObj) {
  const p = document.createElement("p");
  p.id = newArtiObj.id;
  p.className = "draggable";
  p.draggable = "true";
  const span = document.createElement("span");
  span.innerText = newArtiObj.text;
  const checkbtn = document.createElement("button");
  checkbtn.innerText = "✔️";
  //   checkbtn.addEventListener("click", checkArti);
  const Xbtn = document.createElement("button");
  Xbtn.innerText = "❌";
  p.appendChild(span);
  p.appendChild(checkbtn);
  p.appendChild(Xbtn);
  artiList.prepend(p);
}

function handleArtiSubmit(event) {
  event.preventDefault();
  const newArti = artiInput.value;
  artiInput.value = "";
  const newArtiObj = {
    text: newArti,
    id: Date.now(),
  };
  Artis.push(newArtiObj);
  paintArti(newArtiObj);
}

artiForm.addEventListener("submit", handleArtiSubmit);

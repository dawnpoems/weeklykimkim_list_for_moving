function saveLocation(draggables) {
  const dragpla = draggables.parentNode.className;
  oriArtis = Artis.find((arti) => arti.id === parseInt(draggables.id));
  oriArtis.location = dragpla;
  saveArtis();
}

function dragAndDrop() {
  const draggables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".container");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
      saveLocation(draggable);
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", () => {
      const draggable = document.querySelector(".dragging");
      container.prepend(draggable);
    });
  });
}

dragAndDrop();

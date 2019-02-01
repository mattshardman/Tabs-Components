const leftBtn = document.querySelector("#move-left");
const rightBtn = document.querySelector("#move-right");

leftBtn.addEventListener("click", () => move(false));
rightBtn.addEventListener("click", () => move(true));

function move(right) {
  const num = right ? 1 : -1;
  const current = document.querySelector(".box-selected");
  const data = current.dataset.box;
  const nextBox = document.querySelector(`.box[data-box="${Number(data) + num}"]`);

  if (nextBox) {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.classList.remove("box-selected"));

    if (right) {
      current.classList.add("box-left");
    } else {
      current.classList.add("box-right");
    }

    nextBox.classList.remove("box-right", "box-left");
    nextBox.classList.add("box-selected");
  }
}

function isEmpty(container) {
  return container.children.length === 0;
}

const stackContainer = document.getElementById("stack-container");
const block = document.querySelector(".block");

block.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "block");
});

stackContainer.addEventListener("dragover", (e) => {
  e.preventDefault(); // ต้องป้องกันการเกิดเหตุการณ์นี้เพื่อให้สามารถวางได้
});

stackContainer.addEventListener("drop", (e) => {
  e.preventDefault(); // ป้องกันการเกิดเหตุการณ์ปกติของการวาง
  const data = e.dataTransfer.getData("text/plain");
  if (data === "block") {
    const newBlock = block.cloneNode(true); // สร้างโคลนของบล็อก
    stackContainer.appendChild(newBlock); // วางบล็อกลงในสแต็ก
  }
});

stackContainer.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("block")) {
    stackContainer.removeChild(e.target);
    document.getElementById(
      "result"
    ).innerHTML = `stack-container is empty: ${isEmpty(stackContainer)}`;
  }
});

document.getElementById(
  "result"
).innerHTML = `stack-container is empty: ${isEmpty(stackContainer)}`;

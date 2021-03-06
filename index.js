const rows = 20;
const cols = 20;
function createWorld() {
  let world = document.querySelector("#world");

  let tbl = document.createElement("table");
  tbl.setAttribute("id", "worldgrid");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("td");
      cell.setAttribute("id", i + "_" + j);
      cell.setAttribute("class", "dead");
      cell.addEventListener("click", cellClick);
      tr.appendChild(cell);
    }
    tbl.appendChild(tr);
  }
  world.appendChild(tbl);
}
function cellClick() {
  const loc = this.id.split("_");
  const row = Number(loc[0]); // Get i
  const col = Number(loc[1]); // Get j

  // Toggle cell alive or dead
  if (this.className === "alive") {
    this.setAttribute("class", "dead");
  } else {
    this.setAttribute("class", "alive");
  }
}
window.onload = () => {
  createWorld();
};

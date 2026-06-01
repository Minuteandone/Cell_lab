const cells = [
  {
    id: "animal",
    name: "Animal Cell",
    category: "Eukaryotic cell",
    summary: "Flexible membrane, large nucleus, and energy-producing mitochondria.",
    description:
      "Animal cells have a soft plasma membrane and a collection of organelles that divide work across the cell, from genetic control to energy production.",
    shell: {
      bg: "radial-gradient(circle at 30% 22%, rgba(255,255,255,0.24), rgba(92, 211, 255, 0.24) 42%, rgba(49, 112, 189, 0.18))",
      border: "rgba(102, 224, 255, 0.72)",
      radius: "49% 51% 47% 53% / 55% 45% 55% 45%",
    },
    parts: [
      part("nucleus", "Nucleus", "Stores DNA and directs cell activity.", 36, 33, 27, 25, 96, "#9d7cff", "50%", -8),
      part("nucleolus", "Nucleolus", "Builds ribosome components inside the nucleus.", 47, 42, 8, 8, 132, "#f472b6", "50%", 0),
      part("mitochondria", "Mitochondria", "Convert food energy into ATP.", 62, 25, 18, 9, 112, "#ff9f43", "48%", 22),
      part("golgi", "Golgi Apparatus", "Sorts and packages proteins for delivery.", 22, 58, 24, 8, 82, "#34d399", "45%", -18),
      part("er", "Endoplasmic Reticulum", "Folds proteins and moves materials.", 24, 30, 18, 7, 72, "#60a5fa", "35%", 28),
      part("lysosome", "Lysosome", "Breaks down waste and worn-out parts.", 67, 61, 10, 10, 116, "#f43f5e", "50%", 0),
    ],
  },
  {
    id: "plant",
    name: "Plant Cell",
    category: "Photosynthetic cell",
    summary: "Rigid cell wall, chloroplasts, and a large central vacuole.",
    description:
      "Plant cells combine a supportive wall with chloroplasts that capture light energy and a central vacuole that helps maintain pressure.",
    shell: {
      bg: "linear-gradient(135deg, rgba(86, 178, 86, 0.28), rgba(40, 123, 92, 0.17))",
      border: "rgba(134, 239, 172, 0.86)",
      radius: "18%",
    },
    parts: [
      part("cell-wall", "Cell Wall", "A rigid outer layer that gives the cell shape.", 6, 6, 88, 88, 14, "rgba(34,197,94,0.18)", "18%", 0),
      part("vacuole", "Central Vacuole", "Stores water and supports cell pressure.", 31, 24, 43, 43, 82, "rgba(125, 211, 252, 0.48)", "48%", 0),
      part("nucleus", "Nucleus", "Contains chromosomes and manages cell processes.", 17, 42, 22, 20, 128, "#a78bfa", "50%", -10),
      part("chloroplast-a", "Chloroplast", "Captures sunlight for photosynthesis.", 63, 20, 17, 10, 130, "#22c55e", "48%", -18),
      part("chloroplast-b", "Chloroplast", "Produces sugars using light, water, and carbon dioxide.", 62, 64, 18, 10, 126, "#16a34a", "48%", 20),
      part("mitochondria", "Mitochondria", "Release usable energy from sugars.", 24, 68, 15, 8, 110, "#fb923c", "50%", 28),
    ],
  },
  {
    id: "bacteria",
    name: "Bacterium",
    category: "Prokaryotic cell",
    summary: "Small cell without a nucleus, featuring DNA, ribosomes, and flagellum.",
    description:
      "Bacteria are prokaryotes, so their DNA sits in a nucleoid region instead of a membrane-bound nucleus, and many move with a flagellum.",
    shell: {
      bg: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), rgba(251, 191, 36, 0.24) 48%, rgba(180, 83, 9, 0.17))",
      border: "rgba(251, 191, 36, 0.82)",
      radius: "45% / 34%",
    },
    parts: [
      part("capsule", "Capsule", "Sticky outer coating that helps protection and attachment.", 8, 24, 84, 52, 22, "rgba(251, 191, 36, 0.14)", "45% / 34%", 0),
      part("nucleoid", "Nucleoid DNA", "Looped genetic material not enclosed by a nucleus.", 35, 38, 30, 18, 114, "#f472b6", "50%", -12),
      part("ribosomes", "Ribosomes", "Tiny factories that build proteins.", 22, 32, 9, 9, 128, "#93c5fd", "50%", 0),
      part("plasmid", "Plasmid", "Small DNA ring that can carry helpful genes.", 65, 50, 10, 10, 132, "#c084fc", "50%", 0),
      part("flagellum", "Flagellum", "Whip-like tail that propels some bacteria.", 83, 49, 34, 5, 86, "#fde68a", "999px", 16),
      part("pili", "Pili", "Short hairs used for attachment and DNA transfer.", 16, 68, 19, 4, 100, "#fcd34d", "999px", -36),
    ],
  },
];

function part(id, name, description, x, y, w, h, z, color, radius, rotation) {
  return { id, name, description, x, y, w, h, z, color, radius, rotation };
}

const state = {
  selectedCellId: cells[0].id,
  spin: 28,
  tilt: -14,
  hiddenParts: new Set(),
};

const cellList = document.querySelector("#cell-list");
const cellModel = document.querySelector("#cell-model");
const partControls = document.querySelector("#part-controls");
const viewerTitle = document.querySelector("#viewer-title");
const viewerCategory = document.querySelector("#viewer-category");
const viewerDescription = document.querySelector("#viewer-description");

document.querySelector("#cell-count").textContent = cells.length;
document.querySelector("#part-count").textContent = cells.reduce((count, cell) => count + cell.parts.length, 0);
document.querySelector("#rotate-left").addEventListener("click", () => rotate(-18, 0));
document.querySelector("#rotate-right").addEventListener("click", () => rotate(18, 0));
document.querySelector("#tilt-up").addEventListener("click", () => rotate(0, -10));
document.querySelector("#tilt-down").addEventListener("click", () => rotate(0, 10));
document.querySelector("#reset-view").addEventListener("click", resetView);
document.querySelector("#show-all").addEventListener("click", showAllParts);

function renderDirectory() {
  cellList.innerHTML = "";
  cells.forEach((cell) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `cell-card ${cell.id === state.selectedCellId ? "active" : ""}`;
    card.setAttribute("role", "listitem");
    card.innerHTML = `<strong>${cell.name}</strong><p>${cell.summary}</p>`;
    card.addEventListener("click", () => selectCell(cell.id));
    cellList.append(card);
  });
}

function renderSelectedCell() {
  const cell = getSelectedCell();
  viewerTitle.textContent = cell.name;
  viewerCategory.textContent = cell.category;
  viewerDescription.textContent = cell.description;

  cellModel.style.setProperty("--spin", `${state.spin}deg`);
  cellModel.style.setProperty("--tilt", `${state.tilt}deg`);
  cellModel.innerHTML = "";
  cellModel.append(createShell(cell));
  cell.parts.forEach((cellPart) => {
    cellModel.append(createOrganelle(cellPart));
    cellModel.append(createLabel(cellPart));
  });
  renderPartControls(cell);
}

function createShell(cell) {
  const shell = document.createElement("div");
  shell.className = "cell-shell";
  shell.style.setProperty("--shell-bg", cell.shell.bg);
  shell.style.setProperty("--shell-border", cell.shell.border);
  shell.style.setProperty("--shell-radius", cell.shell.radius);
  return shell;
}

function createOrganelle(cellPart) {
  const organelle = document.createElement("div");
  organelle.className = `organelle ${state.hiddenParts.has(cellPart.id) ? "hidden" : ""}`;
  setPartStyles(organelle, cellPart);
  organelle.title = `${cellPart.name}: ${cellPart.description}`;
  organelle.dataset.partId = cellPart.id;
  return organelle;
}

function createLabel(cellPart) {
  const label = document.createElement("span");
  label.className = `label-pin ${state.hiddenParts.has(cellPart.id) ? "hidden" : ""}`;
  label.textContent = cellPart.name;
  setPartStyles(label, cellPart);
  return label;
}

function setPartStyles(element, cellPart) {
  element.style.setProperty("--x", `${cellPart.x}%`);
  element.style.setProperty("--y", `${cellPart.y}%`);
  element.style.setProperty("--w", `${cellPart.w}%`);
  element.style.setProperty("--h", `${cellPart.h}%`);
  element.style.setProperty("--z", `${cellPart.z}px`);
  element.style.setProperty("--color", cellPart.color);
  element.style.setProperty("--radius", cellPart.radius);
  element.style.setProperty("--r", `${cellPart.rotation}deg`);
}

function renderPartControls(cell) {
  partControls.innerHTML = "";
  cell.parts.forEach((cellPart) => {
    const id = `toggle-${cell.id}-${cellPart.id}`;
    const wrapper = document.createElement("label");
    wrapper.className = "part-control";
    wrapper.htmlFor = id;
    wrapper.innerHTML = `
      <input id="${id}" type="checkbox" ${state.hiddenParts.has(cellPart.id) ? "" : "checked"} />
      <span><strong>${cellPart.name}</strong><small>${cellPart.description}</small></span>
    `;
    wrapper.querySelector("input").addEventListener("change", (event) => {
      togglePart(cellPart.id, event.target.checked);
    });
    partControls.append(wrapper);
  });
}

function selectCell(cellId) {
  state.selectedCellId = cellId;
  state.hiddenParts.clear();
  resetView(false);
  renderDirectory();
  renderSelectedCell();
}

function togglePart(partId, isVisible) {
  if (isVisible) {
    state.hiddenParts.delete(partId);
  } else {
    state.hiddenParts.add(partId);
  }
  renderSelectedCell();
}

function showAllParts() {
  state.hiddenParts.clear();
  renderSelectedCell();
}

function rotate(deltaSpin, deltaTilt) {
  state.spin += deltaSpin;
  state.tilt = Math.max(-55, Math.min(45, state.tilt + deltaTilt));
  cellModel.style.setProperty("--spin", `${state.spin}deg`);
  cellModel.style.setProperty("--tilt", `${state.tilt}deg`);
}

function resetView(shouldRender = true) {
  state.spin = 28;
  state.tilt = -14;
  if (shouldRender) renderSelectedCell();
}

function getSelectedCell() {
  return cells.find((cell) => cell.id === state.selectedCellId) ?? cells[0];
}

renderDirectory();
renderSelectedCell();

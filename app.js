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
      texture: "animal",
    },
    parts: [
      part("plasma-membrane", "Plasma Membrane", "Selective lipid bilayer with embedded proteins around the cell.", 5, 5, 90, 90, 24, "rgba(103, 232, 249, 0.12)", "49% 51% 47% 53% / 55% 45% 55% 45%", 0, "membrane"),
      part("nucleus", "Nucleus", "Stores DNA in chromatin and directs cell activity through nuclear pores.", 36, 33, 27, 25, 96, "#9d7cff", "50%", -8, "nucleus"),
      part("nucleolus", "Nucleolus", "Dense ribosome-building region inside the nucleus.", 47, 42, 8, 8, 142, "#f472b6", "50%", 0, "nucleolus"),
      part("mitochondria", "Mitochondrion", "Double-membrane organelle with folded cristae for ATP production.", 62, 25, 19, 10, 112, "#ff9f43", "48%", 22, "mitochondrion"),
      part("golgi", "Golgi Apparatus", "Stacked cisternae that modify, sort, and package proteins.", 21, 58, 26, 12, 82, "#34d399", "38%", -18, "golgi"),
      part("rough-er", "Rough ER", "Ribosome-studded membranes that fold newly made proteins.", 21, 29, 22, 12, 76, "#60a5fa", "36%", 28, "rough-er"),
      part("smooth-er", "Smooth ER", "Tubular membranes that make lipids and detoxify chemicals.", 54, 61, 18, 10, 74, "#38bdf8", "40%", -26, "smooth-er"),
      part("lysosome", "Lysosome", "Acidic vesicle that digests waste and worn-out organelles.", 69, 60, 10, 10, 116, "#f43f5e", "50%", 0, "lysosome"),
      part("centriole", "Centrioles", "Paired microtubule cylinders used during cell division.", 29, 71, 14, 8, 124, "#facc15", "32%", 14, "centriole"),
      part("cytoskeleton", "Cytoskeleton", "Microtubule and filament network that supports cell shape and movement.", 18, 18, 64, 62, 54, "rgba(147, 197, 253, 0.22)", "46%", 0, "cytoskeleton"),
      part("free-ribosomes", "Free Ribosomes", "Scattered protein-building particles in the cytoplasm.", 55, 43, 24, 18, 136, "rgba(191, 219, 254, 0.95)", "42%", 0, "ribosome-field"),
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
      texture: "plant",
    },
    parts: [
      part("cell-wall", "Cell Wall", "Rigid cellulose-rich outer layer with visible wall fibers.", 5, 5, 90, 90, 14, "rgba(34,197,94,0.18)", "18%", 0, "cell-wall"),
      part("plasma-membrane", "Plasma Membrane", "Thin selective membrane just inside the cell wall.", 10, 10, 80, 80, 34, "rgba(134, 239, 172, 0.18)", "18%", 0, "membrane"),
      part("vacuole", "Central Vacuole", "Large fluid-filled sac that stores water and maintains turgor pressure.", 30, 23, 45, 45, 82, "rgba(125, 211, 252, 0.48)", "48%", 0, "vacuole"),
      part("nucleus", "Nucleus", "Contains chromosomes and manages cell processes.", 17, 42, 22, 20, 128, "#a78bfa", "50%", -10, "nucleus"),
      part("chloroplast-a", "Chloroplast", "Photosynthetic organelle with stacked thylakoid grana.", 63, 20, 18, 11, 130, "#22c55e", "48%", -18, "chloroplast"),
      part("chloroplast-b", "Chloroplast", "Photosynthetic organelle with chlorophyll-rich internal membranes.", 62, 64, 19, 11, 126, "#16a34a", "48%", 20, "chloroplast"),
      part("mitochondria", "Mitochondrion", "Releases usable energy from sugars using cristae folds.", 24, 68, 16, 9, 110, "#fb923c", "50%", 28, "mitochondrion"),
      part("golgi", "Golgi Apparatus", "Curved stacks that process proteins and cell-wall materials.", 20, 23, 20, 10, 96, "#34d399", "38%", 18, "golgi"),
      part("plasmodesmata", "Plasmodesmata", "Tiny wall channels that connect neighboring plant cells.", 73, 38, 15, 24, 118, "#bbf7d0", "22%", -8, "plasmodesmata"),
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
      texture: "bacteria",
    },
    parts: [
      part("capsule", "Capsule", "Sticky outer glycocalyx coating with mottled texture.", 8, 24, 84, 52, 22, "rgba(251, 191, 36, 0.14)", "45% / 34%", 0, "capsule"),
      part("cell-wall", "Cell Wall", "Peptidoglycan support layer beneath the capsule.", 12, 28, 76, 44, 42, "rgba(245, 158, 11, 0.22)", "45% / 34%", 0, "cell-wall"),
      part("membrane", "Cell Membrane", "Selective inner membrane controlling transport.", 16, 31, 68, 38, 62, "rgba(253, 230, 138, 0.2)", "45% / 34%", 0, "membrane"),
      part("nucleoid", "Nucleoid DNA", "Coiled chromosomal DNA not enclosed by a nucleus.", 34, 37, 32, 20, 114, "#f472b6", "50%", -12, "nucleoid"),
      part("ribosomes", "Ribosomes", "Many tiny protein-building particles throughout the cytoplasm.", 22, 32, 44, 28, 128, "#93c5fd", "50%", 0, "ribosome-field"),
      part("plasmid", "Plasmid", "Small circular DNA ring that can carry helpful genes.", 65, 50, 10, 10, 132, "#c084fc", "50%", 0, "plasmid"),
      part("flagellum", "Flagellum", "Segmented whip-like tail that propels some bacteria.", 83, 49, 35, 6, 86, "#fde68a", "999px", 16, "flagellum"),
      part("pili", "Pili", "Short attachment hairs projecting from the surface.", 16, 68, 20, 5, 100, "#fcd34d", "999px", -36, "pili"),
    ],
  },
];

function part(id, name, description, x, y, w, h, z, color, radius, rotation, type = "vesicle") {
  return { id, name, description, x, y, w, h, z, color, radius, rotation, type };
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
  shell.className = `cell-shell shell-${cell.shell.texture}`;
  shell.style.setProperty("--shell-bg", cell.shell.bg);
  shell.style.setProperty("--shell-border", cell.shell.border);
  shell.style.setProperty("--shell-radius", cell.shell.radius);
  shell.innerHTML = `
    <span class="shell-highlight"></span>
    <span class="shell-texture"></span>
    <span class="shell-depth"></span>
  `;
  return shell;
}

function createOrganelle(cellPart) {
  const organelle = document.createElement("div");
  organelle.className = `organelle organelle-${cellPart.type} ${state.hiddenParts.has(cellPart.id) ? "hidden" : ""}`;
  setPartStyles(organelle, cellPart);
  organelle.title = `${cellPart.name}: ${cellPart.description}`;
  organelle.dataset.partId = cellPart.id;
  organelle.innerHTML = createOrganelleDetails(cellPart.type);
  return organelle;
}

function createOrganelleDetails(type) {
  const detailCounts = {
    nucleus: 7,
    mitochondrion: 5,
    golgi: 6,
    "rough-er": 10,
    "smooth-er": 6,
    chloroplast: 8,
    vacuole: 5,
    nucleoid: 7,
    "ribosome-field": 22,
    flagellum: 8,
    pili: 6,
    cytoskeleton: 9,
    centriole: 9,
    "cell-wall": 10,
    membrane: 12,
    capsule: 16,
    plasmodesmata: 6,
  };
  const count = detailCounts[type] ?? 4;
  return Array.from({ length: count }, (_, index) => `<span class="detail detail-${index + 1}"></span>`).join("");
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

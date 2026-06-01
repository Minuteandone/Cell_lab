# Cell Lab Directory

A static web-based cell directory for exploring simplified 3D models of animal, plant, and bacterial cells.

## Features

- Browse a directory of cell types.
- Inspect more detailed procedural models with membrane textures, internal folds, chromosome coils, ribosome fields, and cell-wall structures.
- Rotate and tilt each cell model in the browser.
- Hide or show individual cell parts from the visibility panel.
- Reset the model orientation or show all parts with one click.

## Run locally

Start any static file server from the repository root, for example:

```bash
python3 -m http.server 4173
```

Then open <http://127.0.0.1:4173/>.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. It deploys the static site to GitHub Pages whenever changes are pushed to `main`, and it can also be started manually from the Actions tab.

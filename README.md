# Villacarlos-Portfolio-
# Portfolio 2025 — How to Run

This is a static portfolio site built with HTML, CSS, and JavaScript. You can open it directly or serve it with a simple local server for best results (recommended for videos, fonts, and 3D model viewer).

## Run Locally (Windows)

### Option A) Double‑click (quickest)
- Open the folder in File Explorer and double‑click `index.html`.
- If anything doesn’t load (e.g., video or 3D model), use Option B or C.

### Option B) Built‑in Python server (no install needed if Python is on your PC)
In PowerShell from the project folder:
```powershell
# If you have Python 3 installed on Windows
py -m http.server 5500
# or
python -m http.server 5500
```
Then open:
```
http://localhost:5500
```

### Option C) Node static server
If you have Node.js installed:
```powershell
# one-time (installs a simple static server)
npm install -g serve

# start the server from the project folder
serve -l 5500 .
```
Then open:
```
http://localhost:5500
```

### Option D) VS Code Live Server (GUI)
- Open folder in VS Code
- Install the "Live Server" extension
- Right‑click `index.html` → "Open with Live Server"

## Project Files
- `index.html` — main page
- `style.css` — styles
- `script.js` — interactions
- Assets: images/videos like `picture.png`, `videowork.mp4`, `EventNotify.png`
- External: `@google/model-viewer` is loaded via CDN in `index.html`

## Notes
- Keep all files in the same folder so paths in `index.html` keep working
- If media or the 3D model doesn’t load over `file://`, use a local server (Options B–D)

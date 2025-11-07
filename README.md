# Project title

Paula Villacarlos — Portfolio

# Short description

A modern, responsive personal portfolio showcasing projects, videos, 3D work, and contact information. Built with HTML, CSS, and JavaScript, featuring Google Fonts, Font Awesome icons, and a 3D model viewer.

# How to run locally

This is a static portfolio. You can open it directly or serve it locally (recommended for videos, fonts, and 3D model viewer).

## Windows

### Option A) Double‑click (quickest)
- Open the folder in File Explorer and double‑click `index.html`.
- If anything doesn’t load (e.g., video or 3D model), use Option B, C, or D.

### Option B) Built‑in Python server
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

## Project files
- `index.html` — main page
- `style.css` — styles
- `script.js` — interactions
- Assets: images/videos like `picture.png`, `videowork.mp4`, `EventNotify.png`, `Mylogo2.png`, `dogwalkersgold.glb`
- External: `@google/model-viewer` is loaded via CDN in `index.html`

# Credits
- Fonts: Inter via Google Fonts (`https://fonts.google.com/`)
- Icons: Font Awesome 6 CDN (`https://fontawesome.com/`)
- 3D Viewer: `@google/model-viewer` CDN (`https://modelviewer.dev/`)
- Media (images/video): © Paula Michelle Villacarlos (unless otherwise credited)
- Favicon/Logo: `Mylogo2.png` by Paula Michelle Villacarlos
- Music: none



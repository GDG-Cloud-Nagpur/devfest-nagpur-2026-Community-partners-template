# Partner Poster Maker

Single-file web app (`index.html`). No build step, no server code. Everything runs in the browser, so partner images never leave their device.

## Host it (free)

**GitHub Pages**
1. Create a repo and add `index.html`.
2. Settings → Pages → Source: `main` / root → Save.
3. Share `https://<user>.github.io/<repo>/`.

**Netlify (fastest)**: open https://app.netlify.com/drop and drag this folder in.

## Notes
- Needs internet for the OCR, QR and ZIP libraries (loaded from jsDelivr).
- QR link is fixed in `index.html` (`QR_URL`).

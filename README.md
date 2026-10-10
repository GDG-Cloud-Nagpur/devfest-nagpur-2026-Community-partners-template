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

## Editing the default captions
Captions for LinkedIn, Instagram, X and WhatsApp live in `captions.js`. Add or change variants there.
Use `[Placeholders]` in square brackets — partners fill each one once and it applies to every platform.
`[Community name]` and `[Coupon code]` also feed the poster; `[Ticket link]` is always the fixed tickets link.
Direct link to caption-only mode: `…/#caption`.

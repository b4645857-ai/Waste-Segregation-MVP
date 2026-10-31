# EcoSort AI — Offline Advanced Edition v4.0

A no-API-key, offline-first waste segregation and sustainability assistant based on the supplied EcoSort AI hackathon presentation.

## Start on Windows
1. Extract the ZIP.
2. Open the `EcoSort_AI_Offline_Advanced_v4` folder in VS Code.
3. Open the terminal in that folder.
4. Run `npm start` (Node.js 18+ required).
5. Visit http://localhost:3000.

No `.env` file, API key, npm install, external AI service or paid account is required.

## Included modules
- Scan workspace: image upload, drag-and-drop, webcam capture and one-shot live capture.
- Offline visual reference matching: compares a simple RGB histogram against the local image library and returns the closest match. This is an experimental similarity heuristic, **not a trained AI model or object detector**. It can be wrong; confirm the item before saving.
- Labelled sample mode: selecting one of the dataset cards returns its known label directly.
- Activity feed: records app opens, image selection, matching, reference views, confirmed scans, exports, profile updates and EcoBot questions.
- History: locally persisted confirmed scans, search, category filter, CSV export and clear action.
- Impact dashboard: points, item counts, indicative CO₂ estimate, category breakdown and milestones.
- Dataset browser: search/filter and CSV export for all 200 images.
- Community profile and five-item challenge (local-only).
- EcoBot: deterministic offline rule-based disposal guidance, not generative AI.
- Resin-code guide, contamination checklist and compost guide.
- Collection reminders saved in browser storage.
- Optional nearby facility lookup through OpenStreetMap/Overpass (requires internet and location permission).

## Dataset details
There are 200 image files: 50 per category. Each category contains 20 supplied original illustrative images plus 30 augmented variants generated from those originals using rotation, flip, crop, brightness and contrast adjustments. The 120 augmented images are not 120 new real-world photographs or distinct objects. All 200 have item/category labels in `labels.csv`.

## Local data and privacy
Images are compared in the browser and are not uploaded. Scan history, activity, points, profile and reminders are stored in localStorage in the browser. Clearing browser site data will remove this local data. No account or cloud sync is included.

## Validation
Run `npm run check` for syntax checks and `npm test` for dataset and app-section integrity. The app has no runtime npm dependencies.

## Important limitations
- The visual matcher is a basic colour-histogram nearest-reference method; it is not a robust classifier, does not perform object detection, and does not return calibrated AI confidence.
- For reliable real-world recognition, a trained local vision model (for example, a quantized TensorFlow Lite / ONNX model) and a separately validated dataset are required. No such model is bundled in this no-API edition.
- EcoBot uses built-in rules and keyword matching, not an LLM.
- Barcode lookup is omitted to keep core functionality fully offline.
- Drop-off finder is optional and requires internet.
- Bin rules vary by municipality. Hazardous waste must be kept separate and routed through authorised collection.
- CO₂ and impact numbers are illustrative engagement estimates, not verified lifecycle calculations.


## v4.1 reliability patch
- Low-similarity uploads are now rejected rather than assigned a misleading waste label.
- A rejected scan records an Activity event but does not create a History record or award points.
- History now explains the difference between no confirmed scans and a filter/search with no matching records.
- History is created only after the user explicitly clicks **Confirm & save**.

Important: offline colour-histogram similarity is an experimental visual heuristic, not a trained classifier. It cannot reliably identify arbitrary photos or multiple objects. Use labelled Dataset samples for deterministic demos; verify any suggested match before confirming.

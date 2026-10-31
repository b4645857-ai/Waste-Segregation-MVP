# EcoSort AI — Advanced Integrated Build

## Run on Windows
1. Extract this ZIP.
2. Open the inner `EcoSort_AI_Offline_Advanced_v4` folder in VS Code (the folder containing `package.json`).
3. Open VS Code Terminal in that folder.
4. Run:
   ```powershell
   npm run check
   npm test
   npm start
   ```
5. Open http://localhost:3000 in Chrome or Edge.
6. Select Camera, allow permission, point at one of the seven supplied objects, then click Find closest reference.

## Camera recognition
The camera/upload matcher uses MobileNet v2 image embeddings in the browser and compares the frame with the seven user-supplied real-world reference photographs. It requires internet on first load to fetch TensorFlow.js and MobileNet from jsDelivr. No API key is used and camera images are processed in the browser. The original 200-image dataset and existing app features are preserved; seven real-world photos are added (207 references total).

## Honest limitation
This is nearest-reference feature matching, not a model trained on broad waste classes. The displayed score is feature similarity, not a calibrated probability or guaranteed prediction. Lighting, angle and background can affect results. Verify manually, especially hazardous waste.

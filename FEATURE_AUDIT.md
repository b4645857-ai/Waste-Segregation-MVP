# Feature audit — v4.0

| Feature | Status | Notes |
|---|---|---|
| 200 local image files | Implemented | 50/category; 80 source + 120 augmented |
| Labelled sample selection | Implemented | Uses known CSV/JSON labels |
| Upload and drag/drop | Implemented | Local browser only |
| Webcam and single-frame capture | Implemented | Browser permission required |
| Offline image matching | Experimental | RGB histogram nearest reference; not trained AI |
| Activity feed | Implemented | Local event journal |
| Scan history | Implemented | LocalStorage; search/filter/export/clear |
| Impact dashboard | Implemented | Indicative estimates only |
| EcoBot | Implemented | Offline keyword/rule responses, not LLM |
| Community profile/challenge | Local demo | No cross-device sync |
| Resin/contamination/compost tools | Implemented | General guidance |
| Reminders | Local demo | Stored in browser; no background delivery guarantee |
| Drop-off finder | Optional | Requires internet, geolocation and Overpass service |
| API key | Not required | No AI provider integration in this build |
| Trained object detector | Not included | Requires a real trained local model |


## v4.1 patch
- Added 68% minimum visual-similarity threshold; lower matches are rejected and not saved.
- Improved empty-history messaging for filters and unconfirmed scans.
- This does not turn the histogram matcher into trained AI; confidence remains a similarity score only.

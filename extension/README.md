# Arabizzi — Chrome Extension

A Manifest V3 Chrome extension that converts Tunisian Arabic (Latin / Arabizi) into **Arabic script**, **Modern Standard Arabic (Fusha)**, **English**, or **French** using Google Gemini.

It runs entirely in the browser — no backend required. Each user supplies their own free Gemini API key, stored only in `chrome.storage.local`.

Part of the [Arabizzi](https://github.com/Abdelkaderbzz/arabizzi) project.

**Website:** [arabizzi.com](https://arabizzi.com/)

## Features

- Toolbar popup converter with Fusha, colloquial Arabic, English, and French modes
- Bring-your-own Gemini API key (free tier)
- Copy output, recent history (last 10), and saved bookmarks
- Bookmark conversions to keep them permanently
- Per-item copy, save, and delete in history
- English / Arabic interface with RTL support

## Files

```
extension/
├── manifest.json     # MV3 manifest
├── popup.html        # popup UI
├── popup.css         # styling (teal/cream theme)
├── popup.js          # logic + Gemini API call
└── icons/            # main-logo.png, icon16.png, icon48.png, icon128.png
```

## Get a free Gemini API key

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Create an API key (no credit card required)
3. In the extension popup, click the gear icon, paste the key, and save

## Load locally (development)

1. Open `chrome://extensions`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select this `extension/` folder
5. Pin the extension and click its icon to open the popup

## Package for the Chrome Web Store

```bash
cd extension && zip -r ../arabizzi-extension.zip . -x "icons/generate.js"
```

Upload `arabizzi-extension.zip` at the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).

### Listing checklist

- **Name:** Arabizzi
- **Category:** Productivity
- **Icons:** 16×16, 48×48, and 128×128 PNGs (included in `icons/`)
- **Screenshots:** 1280×800 or 640×400
- **Privacy policy:** [https://arabizzi.com/privacy.html](https://arabizzi.com/privacy.html) (`netlify-landing/privacy.html`)
- **Privacy practices:** declare local storage of API key and that text is sent to Google Gemini for conversion

## How it works

- Calls `https://generativelanguage.googleapis.com` directly (declared in `host_permissions`)
- Uses the `gemini-2.5-flash` model
- Usage counts against the user's own Gemini free tier
- No data is sent anywhere except Google's Gemini API

## Web app

For the full Next.js version with examples and server-side API key management, see the [main README](../README.md).

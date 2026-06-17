# Arabic Converter — Landing Page

Static landing page for the Chrome extension. Deploy the **`netlify-landing/`** folder to Netlify.

## Deploy to Netlify

### Option A — Drag & drop

1. Zip the contents of this folder (not the parent folder).
2. Go to [Netlify Drop](https://app.netlify.com/drop) and upload the zip.

### Option B — Git-connected site

1. Create a new site in Netlify linked to this repo.
2. Set **Publish directory** to `netlify-landing`.
3. Deploy.

## SEO

After your first Netlify deploy, update the site URL in `index.html` if your domain differs from `https://arabic-converter.netlify.app/`:

- `link rel="canonical"`
- `og:url`, `og:image`
- `twitter:image`
- JSON-LD `@id` and `url` fields

## Demo video

The page includes a demo section. Choose one:

1. **Local video** — add `demo.mp4` to this folder (16:9 recommended).
2. **YouTube** — set `YOUTUBE_ID` in `index.html` (search for `const YOUTUBE_ID`).

If neither is set, a placeholder is shown until you add a video.

## Extension link

The install buttons point to:

https://chromewebstore.google.com/detail/fkgphgcloiijjpmoiiimjibjafmobnlm

## Privacy policy

Host `netlify-privacy/` as a separate Netlify site (or subpath) and add a footer link if needed.

# Arabizzi — Landing Page

Static landing page for the Chrome extension. Deploy the **`netlify-landing/`** folder to Netlify.

**Live site:** [arabizzi.com](https://arabizzi.com/) · **Repository:** [github.com/Abdelkaderbzz/arabizzi](https://github.com/Abdelkaderbzz/arabizzi)

## Deploy to Netlify

### Option A — Drag & drop

1. Zip the contents of this folder (not the parent folder).
2. Go to [Netlify Drop](https://app.netlify.com/drop) and upload the zip.

### Option B — Git-connected site

1. Create a new site in Netlify linked to this repo.
2. Set **Publish directory** to `netlify-landing`.
3. Deploy.

## SEO

After your first Netlify deploy, update the site URL in `index.html` if your domain differs from `https://arabizzi.com/`:

- `link rel="canonical"`
- `og:url`, `og:image`
- `twitter:image`
- JSON-LD `@id` and `url` fields

## Demo video

The landing page embeds the YouTube demo:

https://www.youtube.com/watch?v=lyvKqvKfXUo

To change it later, update the iframe `src` in `index.html` (search for `demo-youtube`).

## Extension link

The install buttons point to:

https://chromewebstore.google.com/detail/fkgphgcloiijjpmoiiimjibjafmobnlm

## Privacy policy

Host `netlify-privacy/` as a separate Netlify site (or subpath) and add a footer link if needed.

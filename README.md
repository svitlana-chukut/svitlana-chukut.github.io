# Svitlana Chukut — Personal Website · Complete Package

The complete, editable copy of the personal website of Svitlana Chukut
(communications, information policy and e-governance) — code, content
AND every media original, in one package, built from the current site
on 8 November 2026.

**497 files · 81 993 408 bytes (82.0 MB) in total.**
Every file is listed, with its exact size and role, in
`FILE-INVENTORY.csv`. The site is a single-page application: one HTML
file holds the structure of every page, shown one at a time through
hash routes (#bio, #library, #courses, …). The site's CONTENT is kept
separately, in data files under `assets/` (see the table), so texts
can be edited without touching the page code.

## Contents

| Path | What it is |
|---|---|
| `index.html` | The live site's structure — the markup of every page. An Editor's Manual comment at the very top explains where everything lives. The texts printed inside it are French fallbacks only; the data files below are the source of truth. |
| `assets/content-texts.js` | Short texts: the shared labels (navigation, header, footer), the page dictionary and the page titles — French first, then English. |
| `assets/content-page-*.js` | The long texts, one file per page: global, home, bio, library, courses, media, events, egov-days, partners, documents, contact, archive, site-files. One entry per passage: [key, French, English]. |
| `assets/content-library.js` | The publication catalogue: 215 records, one line per record, newest first. |
| `assets/content-certificates.js` | The viewer registry: every certificate / document / gallery photo — its full pages, its summary and its gallery caption. |
| `assets/content-scholar.js` | The Google Scholar metrics (works, citations, h-index, i10, as-of). Every Scholar figure on the site is stamped from this one file. |
| `assets/content-files.js` | The file-inventory data (IMGS, NONIMG) behind the guide and archive pages. |
| `assets/style.css` | All design: colour tokens, typography, layout, light + dark themes. |
| `assets/app.js` | Shared behaviour: navigation, language switch, site search, document viewers. |
| `assets/subtitles.js` | Generated subtitle data for one video. Do not edit by hand. |
| `assets/books/` | Book covers and title pages, and the full PDF of the 2008 book (6 files). |
| `assets/certificates/` | Certificate, diploma and gratitude card images (53 files). |
| `assets/cert-pages/` | Full pages of the same documents, opened large in the viewer (105 files). |
| `assets/egov-days/` | E-Governance Days archive, 2008–2011: documents, photographs, emblems (150 files). |
| `assets/photos/` | Photographs: portraits and events (67 files). |
| `assets/logos/` | Partner institution logos (35 files). |
| `assets/thumbs/` | YouTube video thumbnails, named by video ID (19 files). |
| `assets/stock/` | Licensed stock illustrations (14 files). |
| `assets/qa/` | Page review screenshots (11 files). |
| `assets/linkedin/` | Documents published via LinkedIn (2 files). |
| `EDITING-GUIDE.md` | Step-by-step instructions for the common edits. |
| `FILE-INVENTORY.csv` | Every file of the package: path, folder, exact size, kind, role. |
| `legacy-pages/` | The earlier stand-alone page drafts (bio.html, courses.html, …), kept for reference. They are **not** the live site — the live site is `index.html` plus `assets/`. |
| `icon.jpg` | The site icon used by the publishing shell. |

The only folder of the live site not duplicated inside this package is
`assets/downloads/` — this package is itself that folder's download,
and a ZIP cannot contain itself. Everything else is here, byte for byte.

No file has been renamed: media files keep the exact names the site's
code references, so the unzipped copy works as-is. The professional
naming convention for NEW files is in `EDITING-GUIDE.md`.

## How to run the site

Unzip, then open `index.html` in a browser — or put `index.html` and
the `assets/` folder on any static host. No build step, no database,
no server code.

## Publishing on GitHub Pages

1. Create a new repository on GitHub (for example `svitlana-chukut-website`).
2. Upload or push the CONTENTS of this package's root folder
   (`svitlana-chukut-website/`) — `index.html` must sit at the
   repository root, next to the `assets/` folder.
3. In the repository: Settings -> Pages -> "Deploy from a branch",
   branch `main`, folder `/ (root)`. GitHub publishes the site as-is:
   no build step, no dependencies.

## Keeping this package current

This package is a snapshot of the site as of the date above. After
editing the site, rebuild it the same way it was built: zip
`index.html`, `icon.jpg`, the whole `assets/` folder except
`assets/downloads/`, the legacy drafts under `legacy-pages/`, and the
three root documents (regenerate `FILE-INVENTORY.csv` so every size
stays exact), all under one root folder `svitlana-chukut-website/` —
then update the package figures stated on the site's "Website files
& guide" page (keys `files-download-04` and `files-download-05` in
`assets/content-page-site-files.js`).

## Naming convention

Lowercase Latin letters, digits and hyphens only; subject first, then
detail, then year (`oxford-unesco-ai-gov-2026.jpg`). A document's card
and its viewer pages share one base name (`tcps2-core.jpg`,
`tcps2-core-1.jpg`). `assets/thumbs/` files keep the YouTube video ID
as their name on purpose. Never rename a file in use without updating
every reference to it in `index.html` / `assets/app.js`.

# Svitlana Chukut — Personal Website · Complete Package

The complete, editable copy of the personal website of Svitlana Chukut
(communications, information policy and e-governance) — code AND every
media original, in one package, built from the current site on
8 November 2026.

**479 files · 81,754,622 bytes (81.8 MB) in total.**
Every file is listed, with its exact size and role, in
`FILE-INVENTORY.csv`. The site is a single-page application: one HTML
file holds every page, shown one at a time through hash routes
(#bio, #library, #courses, …).

## Contents

| Path | What it is |
|---|---|
| `index.html` | The whole live site — markup, all texts (French + English) and the publication data. Start here: an Editor's Manual comment sits at the very top of the file. |
| `assets/style.css` | All design: colour tokens, typography, layout, light + dark themes. |
| `assets/app.js` | Shared behaviour: navigation, language switch, site search, document viewers. |
| `assets/subtitles.js` | Generated subtitle data for videos. Do not edit by hand. |
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
| `EDITING-GUIDE.md` | Step-by-step instructions for the six common edits. |
| `FILE-INVENTORY.csv` | Every file of the package: path, folder, exact size, kind, role. |
| `legacy-pages/` | The earlier stand-alone page drafts (bio.html, courses.html, …), kept for reference. They are **not** the live site — the live site is `index.html` alone. |
| `icon.jpg` | The site icon used by the publishing shell. |

The only folder of the live site not duplicated inside this package is
`assets/downloads/` — this package is itself that folder's download, and
a ZIP cannot contain itself. Everything else is here, byte for byte.

No file has been renamed: media files keep the exact names the site's
code references, so the unzipped copy works as-is. The professional
naming convention for NEW files is in `EDITING-GUIDE.md`.

## How to run the site

Unzip, then open `index.html` in a browser — or put `index.html` and
the `assets/` folder on any static host. No build step, no database,
no server code.

## Naming convention

Lowercase Latin letters, digits and hyphens only; subject first, then
detail, then year (`oxford-unesco-ai-gov-2026.jpg`). A document's card
and its viewer pages share one base name (`tcps2-core.jpg`,
`tcps2-core-1.jpg`). `assets/thumbs/` files keep the YouTube video ID
as their name on purpose. Never rename a file in use without updating
every reference to it in `index.html` / `assets/app.js`.

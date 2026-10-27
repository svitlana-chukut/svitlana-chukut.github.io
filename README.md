# Svitlana Chukut - Personal Website

Personal website of Svitlana Chukut - communications, information policy and digital governance expert.
The first woman in Ukraine to earn a Doctor of Sciences degree in Public Administration.
Professor at Igor Sikorsky Kyiv Polytechnic Institute (KPI), also teaching at George Brown College, Canada.

Live version (Muse): https://muse.ai/s/space-xgxc5xqkawxqxva0

## Languages and themes

- Two languages: French (default) and English - full parity, 1341 text blocks in each language
- Light and dark theme, switchable by the visitor (choice is remembered)
- Site-wide search, scroll progress, accessible navigation (skip link, ARIA)

## Pages (10 sections in one file)

The site is a single-page application: all 10 pages live inside index.html and switch without reloading.

1. Home (#home) - portrait, key positions, Google Scholar stats, quick links
2. Biography (#bio) - professional journey, education, career, awards, certificates, projects, research, supervision, expertise, editorial work, volunteering, skills, recommendations
3. Library (#library) - searchable catalogue of works (215 records), books with covers
4. Courses (#courses) - courses and disciplines, KPI and George Brown College teaching
5. Media (#media) - talks and media appearances
6. Events (#events) - events list and photo gallery (34 photos)
7. E-Government Days (#egov-days) - history of the E-Gov Days, editions, sponsors, gallery
8. Partners (#partners) - partner organisations and logos
9. Documents (#documents) - certificates and documents, clickable to enlarge and read
10. Contact (#contact) - contacts and message form (composes a message for LinkedIn, Facebook or email)

## Google Scholar (as of October 2026)

- Citations: 1,950
- h-index: 20
- i10-index: 39
- Profile: https://scholar.google.com/citations?user=PUKuQ8QAAAAJ
- ORCID: https://orcid.org/0000-0001-9829-0218

## Contacts shown on the site

- LinkedIn: https://www.linkedin.com/in/svitlana-chukut
- Facebook: https://www.facebook.com/sv.ch.391
- Email: svchukut@gmail.com, egovtpu@gmail.com

## Technical information

- Type: static site, no server, no database, no build step
- Entry point: index.html (650 KB)
- Styles: assets/style.css (90 KB)
- Scripts: assets/app.js (57 KB)
- Font: Inter (Google Fonts)
- Assets: 272 files, 37 MB in total (see inventory below)
- Last build: 19 October 2026
- Build content hash (SHA-256): cbac80ecf623882b857f4c6cc3bbe0c6af183a1e5e8f4e477e3de06e8c3fa9b6

## Assets inventory (272 files)

- assets/ (root) - 4 files: style.css, app.js, hero.jpg, bio2.jpg
- assets/books - 4 book covers
- assets/cert-pages - 91 certificate pages (large readable versions)
- assets/certificates - 39 certificate cards
- assets/egov-days - 22 archive photos of E-Government Days 2009-2011
- assets/linkedin - 2 files
- assets/logos - 35 partner and institution logos
- assets/photos - 50 photos (events, portraits, awards, section covers)
- assets/qa - 11 section images
- assets/stock - 14 section cover images

## How to publish on GitHub Pages

1. Create a new repository on GitHub, for example `svitlana-chukut-website` (Public).
2. Upload all files and folders from this folder to the repository root:
   index.html, assets/, icon.jpg, README.md, .nojekyll
   The easiest way: open the repository, click "uploading an existing file", drag everything in, Commit.
   Or with Git: `git add .` then `git commit -m "Svitlana Chukut website"` then `git push`.
3. In the repository open Settings - Pages.
4. Under "Build and deployment" choose: Source - Deploy from a branch, Branch - main, folder - / (root). Save.
5. Wait 1-2 minutes. The site will be live at:
   https://YOUR-USERNAME.github.io/svitlana-chukut-website/
6. The file .nojekyll must stay in the root - it tells GitHub Pages to serve all asset files as they are.

Note: if the repository is named `YOUR-USERNAME.github.io`, the site opens directly at https://YOUR-USERNAME.github.io/

## How to edit

- All text is inside index.html. French text is in elements with class `lang-fr`, English in `lang-en`.
  Change both language versions together to keep parity.
- Styles are in assets/style.css, behaviour (language, theme, search, gallery) in assets/app.js.
- To replace a photo, put a new file with the same name into the same assets subfolder.

## Important

- This is the final live version of 19 October 2026, identical to the published Muse site.
- Old standalone page drafts (bio.html, courses.html and others from 7-18 October) are NOT part of this site and are not needed for GitHub. They are kept separately in the archive folder outside this repository.

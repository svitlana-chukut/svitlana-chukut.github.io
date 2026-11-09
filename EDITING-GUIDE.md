# Editing Guide — Svitlana Chukut Website

For editors and developers. This guide ships inside the complete package,
which contains the site's code, its content data AND every media file, so
each step below can be followed on the real files.

How the site is organised — this is the one thing to understand first:

- `index.html` holds only the STRUCTURE of the pages (markup). The texts
  printed inside its `data-i18n` spans are French fallback copies; they
  are overwritten at runtime and are NOT the place to edit.
- The CONTENT lives separately, in data files under `assets/`:
  short labels in `content-texts.js`, the long texts of each page in
  `content-page-<page>.js`, the publication catalogue in
  `content-library.js`, the certificate registry in
  `content-certificates.js`, the Google Scholar metrics in
  `content-scholar.js`, the file inventory in `content-files.js`.
- ALL design lives in `assets/style.css`; shared behaviour (navigation,
  language switch, search, viewers) in `assets/app.js`.

Work on a copy first; keep the ZIP of the previous version as your
backup. After any edit, open the page and check the changed section on
a phone width and a desktop width, in both languages (FR / EN switch
in the header) and both themes (Light / Dark).

## 1. Change a text

1. Decide which kind of text it is:
   - A heading, button or short label → `assets/content-texts.js`
     (the SHARED labels and the PAGE dictionary, French first, then
     English; page tab titles are PAGE_TITLES in the same file).
   - A longer passage → the data file of its page,
     `assets/content-page-<page>.js`. Each entry is
     `[ "key", "French", "English" ]`; the key is the `data-i18n`
     attribute of the passage's span in `index.html`. The comment at
     the top of `index.html` (the Editor's Manual) says which file
     holds which page's texts.
2. Edit BOTH language strings of the same entry, in the data file.
   Never edit only the copy inside `index.html` — it is a fallback
   and will be overwritten. UI labels exist only in French and
   English — do not add a third language to labels.
3. Inline markup inside a string (`<span class="grad">`, links) is
   intentional: keep the tags, edit the words.

## 2. Add a publication (Library)

1. Open `assets/content-library.js`. The comment at the top gives the
   exact field order of one record:
   `[type, year, FR title, EN title, FR source, EN source,
     FR co-authors, EN co-authors, URL, citations (optional)]`
2. Copy the first line, paste it above it (the list is newest-first),
   and replace every field. Keep the quotes and commas exactly.

## 3. Add a course (Courses page)

1. In `index.html`, find the Courses page (search for `page-courses`).
   Block 1 holds the author courses in public administration
   (newest first); block 2 holds the courses developed at George
   Brown Polytechnic. Every course on the page is authored by
   Svitlana Chukut.
2. Copy one whole `<article class="course">…</article>` block and
   paste it in the right position in the right block.
3. Give the new block's texts fresh entries in
   `assets/content-page-courses.js` (key, French, English) and point
   the block's `data-i18n` attributes at those keys. Do not rename
   the block's classes — the accordion in `assets/app.js` opens
   blocks by class.

## 4. Add a certificate or document

One document = one base name, used everywhere:

1. Card image → `assets/certificates/<base-name>.jpg`
2. Full pages → `assets/cert-pages/<base-name>-1.jpg`, `-2.jpg`, …
3. One entry in the viewer registry `assets/content-certificates.js`
   (CERTVIEW): the document's pages, its summary and its gallery
   caption, keyed by the base name. The header of that file gives
   the exact format.
4. A card copied from an existing card (Biography → Certificates, or
   the Documents page) whose button carries `data-cert="<base-name>"`.
   Certificates are listed newest first — keep that order.

## 5. Add a photo

1. Name the file by the convention below and save it in
   `assets/photos/`.
2. Reference it from the section that should show it (`<img src=…>`
   with a meaningful `alt` text in English).
3. Check the section at phone width: the photo must not overflow.

## 6. Update the Google Scholar metrics

Edit only `assets/content-scholar.js` (works, citations — French
format first, then English — h-index, i10, as-of line). `app.js`
stamps those values onto every Scholar figure on the site, so the
numbers exist exactly once.

## 7. Change colours, fonts or spacing

Edit only the tokens at the top of `assets/style.css`: `:root` (light
theme) and the `html[data-theme="dark"]` block (dark theme). One
token change restyles the whole site. Do not add one-off inline
styles.

## 8. Videos and subtitles — hands off the generated file

`assets/subtitles.js` is generated subtitle data for the Olympiad
video; do not edit it by hand. The video itself is a plain
youtube-nocookie embed WITHOUT the YouTube IFrame API: do not re-add
`enablejsapi` or the `iframe_api` script — inside preview shells
whose page origin is opaque, the API's messages can never match an
origin and it floods the console with postMessage errors. Subtitle
synchronisation runs on the page's own clock, driven by the
Start / Pause / −10 s / +10 s / Restart buttons under the player.

## File-naming rules

- Lowercase Latin letters, digits, hyphens. No spaces or capitals.
- Subject → detail → year: `ipac-navigating-ai-2026.jpg`.
- A document's card and its pages share one base name (see step 4).
- `assets/thumbs/` files keep the YouTube video ID as their name —
  that ID is the link to the video. Never rename them.
- Never rename a file in use without searching `index.html` and
  `assets/app.js` for the old name and updating every reference.

## Publishing checklist

- [ ] Both languages edited, in the same entry of the same data file
- [ ] New files follow the naming rules and sit in the right folder
- [ ] Every new image reference points to a file that exists
- [ ] Section checked at phone and desktop widths, light and dark
- [ ] Counts updated where the site states them (cards on Home, the
      Scholar metrics file, section introductions)
- [ ] If the site changed, the complete package in
      `assets/downloads/` has been rebuilt (see "Keeping this
      package current" in README.md)

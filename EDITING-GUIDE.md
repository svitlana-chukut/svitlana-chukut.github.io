# Editing Guide — Svitlana Chukut Website

For editors and developers. This guide ships inside the complete package,
which contains the site's code AND every media file, so each step below
can be followed on the real files. Everything happens in `index.html`
unless a step says otherwise. Work on a copy first; keep the ZIP of the
previous version as your backup. After any edit, open the page and check
the changed section on a phone width and a desktop width, in both
languages (FR / EN switch in the header) and both themes (Light / Dark).

## 1. Change a text

1. Search `index.html` for a distinctive word of the text.
2. Headings and short labels live in the `PAGE` dictionary (search for
   `const PAGE =`): each key has a French string and an English string.
3. Longer passages are paired spans in the markup:
   `<span class="lang-fr">…</span><span class="lang-en">…</span>`.
4. Edit both languages in the same place. UI labels exist only in
   French and English — do not add a third language to labels.

## 2. Add a publication (Library)

1. Find the data list: search for `const LIB =`. The comment above it
   gives the exact field order:
   `[type, year, FR title, EN title, FR source, EN source,
     FR co-authors, EN co-authors, URL, citations (optional)]`
2. Copy the first line, paste it above it (the list is newest-first),
   and replace every field. Keep the quotes and commas exactly.
3. Types already in use appear in the Library filter; a new type also
   needs a filter label (search for `licat_` in the PAGE dictionary).

## 3. Add a course (Courses page)

1. Find the Courses page (search for `page-courses`). Block 1 is for
   author courses in public administration; block 2 is for courses
   developed at George Brown Polytechnic. All courses on the page are
   authored by Svitlana Chukut.
2. Copy one whole `<article class="course">…</article>` block, paste it
   in the right position (block 1 is newest-first), replace its texts
   in both languages. Do not rename its classes — the accordion in
   `assets/app.js` opens blocks by class.

## 4. Add a certificate or document

One document = one base name, used three times:

1. Card image → `assets/certificates/<base-name>.jpg`
2. Full pages → `assets/cert-pages/<base-name>-1.jpg`, `-2.jpg`, …
3. In the Documents page (or the Biography certificates section), copy
   an existing document card and set its button's
   `data-cert="<base-name>"` and its category `data-dcat` (cert / awd /
   art / book / rec). The viewer finds the pages by the base name.

## 5. Add a photo

1. Name the file by the convention below and save it in
   `assets/photos/`.
2. Reference it from the section that should show it (`<img src=…>`
   with a meaningful `alt` text in English).
3. Check the section at phone width: the photo must not overflow.

## 6. Change colours, fonts or spacing

Edit only the tokens at the top of `assets/style.css`: `:root` (light
theme) and the `html[data-theme="dark"]` block (dark theme). One token
change restyles the whole site. Do not add one-off inline styles.

## File-naming rules

- Lowercase Latin letters, digits, hyphens. No spaces or capitals.
- Subject → detail → year: `ipac-navigating-ai-2026.jpg`.
- Card and pages share a base name (see step 4).
- `assets/thumbs/` files keep the YouTube video ID as their name — that
  ID is the link to the video. Never rename them.
- Never rename a file in use without searching `index.html` and
  `assets/app.js` for the old name and updating every reference.

## Publishing checklist

- [ ] Both languages edited, in the same place
- [ ] New files follow the naming rules and sit in the right folder
- [ ] Every new image reference points to a file that exists
- [ ] Section checked at phone and desktop widths, light and dark
- [ ] Counts updated where the site states them (cards on Home, the
      Scholar metrics, section introductions)

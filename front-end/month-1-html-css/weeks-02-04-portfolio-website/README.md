# Weeks 2-4: Personal Portfolio Website (Milestone 1)

**Stage:** The student knows basic HTML from Week 1.
**Project:** A personal portfolio website, live on the internet with a real link. Finished version is in `project/`.

This is one project taught in three parts. Each part is about a week (3 sessions), but move at the student's pace. Do not start the next part until the "Done when" box of the current part is ticked.

---

## Part 1 (Week 2): Semantic HTML and first CSS

### 1. Rebuild the page with meaningful tags
Start a new folder `portfolio` with `index.html`. Use the skeleton from Week 1, and add `lang="en"` on `<html>` plus these two lines in `<head>`:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
*Why: the first line makes letters display correctly. The second makes the page work on phones (we use it in Part 2).*

### 2. Build the structure
Inside `<body>`, build: `<header>` (name and navigation `<nav>` with three links), `<main>` with two `<section>` tags (About, Projects), and a `<footer>`. Put three `<article>` cards inside Projects.
*Why: these are **semantic** tags. They say what the content is, instead of using `<div>` for everything. Screen readers and search engines understand them. Compare with a page made only of `<div>`s so the student sees the difference.*

### 3. Link a CSS file
Create `style.css` and connect it in `<head>`:
```html
<link rel="stylesheet" href="style.css">
```
Start with something you can see:
```css
body {
  font-family: Arial, sans-serif;
  background: #f9fafb;
  color: #1f2937;
}
```
*Why: CSS is separate from HTML. HTML is structure, CSS is looks. Explain a **selector** (`body`) and a **property** (`color`).*

### 4. The box model
Add padding, border and margin to `.card` and `section`. Open DevTools (right-click, Inspect) and show the box diagram on an element.
*Explain: every element is a rectangle: content, padding (inside), border, margin (outside). Add `* { box-sizing: border-box; }` at the top so sizes behave.*

**Done when:**
- [ ] Page uses header, nav, main, section, article and footer
- [ ] Page has colours, a font and spacing from `style.css`
- [ ] Student can draw the box model

---

## Part 2 (Week 3): Layout and responsive design

### 5. Flexbox for the header and About section
```css
header { display: flex; justify-content: space-between; align-items: center; }
#about { display: flex; align-items: center; gap: 30px; }
```
*Explain: `display: flex` puts children in a row. `justify-content` spreads them along the row, `align-items` centres them up and down, `gap` adds space between.*

### 6. Grid for the project cards
```css
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
```
*Explain: Flexbox arranges one row or column. Grid arranges rows and columns together. `1fr` means "one equal share".*

### 7. Make it responsive
```css
@media (max-width: 700px) {
  header { flex-direction: column; gap: 10px; }
  #about { flex-direction: column; text-align: center; }
  .cards { grid-template-columns: 1fr; }
}
```
Shrink the browser window (or use DevTools phone view) and watch it change.
*Explain: a **media query** applies rules only when the screen is narrower than 700px.*

**Done when:**
- [ ] Header and About use Flexbox, cards use Grid
- [ ] On a phone-sized screen everything stacks neatly
- [ ] Student can say when to use Flexbox and when to use Grid

---

## Part 3 (Week 4): Git, GitHub and going live

### 8. Save versions with Git
In the project folder:
```bash
git init
git add .
git commit -m "First portfolio version"
```
*Explain: Git saves versions of the code. A **commit** is a saved snapshot with a message.*

### 9. Put it on GitHub
Create a new **public** repository on GitHub (empty, no README). Then:
```bash
git branch -M main
git remote add origin <the repository URL>
git push -u origin main
```
*Explain: GitHub is the online save file and a portfolio at the same time. `push` sends the commits there.*

### 10. Publish with GitHub Pages
On GitHub: Settings, Pages, Source: "Deploy from a branch", branch `main`, folder `/ (root)`, Save. After a minute the site is live at `https://USERNAME.github.io/REPOSITORY-NAME`.
*Have the student open the link on their phone, then share it with a family member.*

### 11. Practise one more commit
Change something small (a colour, a sentence), then `git add .`, `git commit -m "..."`, `git push`. Refresh the live site.
*Why: students must see that updating the site is just commit and push.*

**Done when:**
- [ ] Portfolio is live at a real link
- [ ] Student made at least two commits and pushed both
- [ ] Student can explain what Git and GitHub each do

---

## Key words
- **Semantic HTML**: using the tag that matches what the content is.
- **Selector**: tells CSS which element to style.
- **Box model**: content, padding, border, margin.
- **Flexbox**: arranges items in a single row or column.
- **Grid**: arranges items in rows and columns at once.
- **Media query**: CSS rule that only applies at certain screen sizes.
- **Commit / push**: save a version / send it to GitHub.

## Extra (if they finish early)
Add a hover effect on the cards (`.card:hover { ... }`), a "Contact" section with a link, or their own colours and font from Google Fonts.

## If they miss a session
They read this README and rebuild that part in their own repository, then show you.

*This repository is read-only. Students do their work in their own repository.*

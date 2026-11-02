# Ruby Leaf Zobo: a 5-section HTML & CSS practice site

A small, single-page website for a made-up Lagos drinks brand. It is built to **teach**: every section in `index.html` and `style.css` has a comment block explaining what it does and why.

No JavaScript, no frameworks, no build tools. Just two files and a browser.

## What's in the folder

```
zobo-site/
├── index.html   ← the structure and content
├── style.css    ← all the design
└── README.md    ← this file
```

## How to run it

1. Download the folder.
2. Double-click `index.html`. It opens in your browser.
3. To see changes while editing, save the file and refresh the browser (or use the **Live Server** extension in VS Code).

An internet connection is needed once for the Google Fonts. Without it, the page still works and falls back to system fonts.

## The 5 sections

| # | Section | What it teaches |
|---|---------|-----------------|
| 1 | **Hero** | `<h1>`, buttons, CSS Grid with two columns, making a circle with `border-radius: 50%` |
| 2 | **Our story** | Two-column layout, readable text width, spacing between paragraphs |
| 3 | **Flavours** | Cards, `auto-fit` grids that wrap on their own, flexbox inside cards, box shadows |
| 4 | **How it's made** | Ordered lists, CSS counters, `::before`, flexbox for side-by-side content |
| 5 | **Order** | A call-to-action, WhatsApp and phone links, centred layout |

Plus a sticky **header/nav** and a **footer**.

## Concepts covered (in the order they appear in `style.css`)

1. **CSS variables**: define colours and fonts once, reuse everywhere
2. **Reset and base styles**: `box-sizing`, `line-height`, `clamp()` for fluid text
3. **Layout helpers**: a centred `.container` and consistent section spacing
4. **Reusable components**: one `.btn` class with variants
5. **Flexbox**: header and nav alignment
6. **CSS Grid**: hero, story, and cards
7. **Pseudo-elements**: `::before` and counters
8. **Responsive design**: a media query at 800px
9. **Accessibility basics**: semantic tags, focus styles, `aria-hidden`, reduced-motion support

## Suggested way to teach with it

1. **Read the HTML first, with no CSS.** Comment out the `<link rel="stylesheet">` line. Show how plain HTML looks, then switch it back on.
2. **Go top to bottom, one section at a time.** For each section, read its HTML comment, then find its matching block in `style.css`.
3. **Change one thing, refresh, observe.** Start with the colour variables at the top of the CSS.
4. **Break it on purpose.** Remove `box-sizing: border-box`, or delete the viewport `<meta>` tag, and see what happens.

## Exercises for the learner

**Easy**
- Change the brand colours in `:root` to make a different drink (for example, green for a moringa brand).
- Change the text and prices.
- Make the buttons less round.

**Medium**
- Add a fourth flavour card. What happens to the grid?
- Add a hover effect to the cards (`.card:hover`).
- Change the story section so the heading sits on the right.

**Challenge**
- Add a sixth section: customer reviews, in a three-column grid.
- Replace the hero circle with a real photo using `<img>` and `object-fit: cover`.
- Add a "Back to top" link in the footer.

## Questions to ask the learner

- Why is there only one `<h1>`?
- What is the difference between `class` and `id` here?
- Why do `.btn` and `.btn-primary` both appear on the same button?
- What does `1fr` mean in a grid?
- Which line makes the cards wrap on small screens, and how would you prove it?

## Next steps after this project

- Add a contact form (HTML `<form>`)
- Add a mobile hamburger menu (needs a little JavaScript)
- Deploy it free on GitHub Pages or Netlify

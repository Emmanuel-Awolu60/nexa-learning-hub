# Week 1: How the Web Works & Your First HTML Page

**Stage:** Complete beginner. Today the student builds their first web page.
**Project:** A personal page with a heading, a paragraph, an image and a list. Finished version is in `project/`.

## Before we start (2 minutes, just talk)
Ask: "When you type a website address, what do you think happens?"
Then explain in plain words: your browser asks a **server** (a computer somewhere) for files, the server sends them back, and the browser turns them into the page. The main file is an **HTML** file. We are going to write one.

## Steps (student types, you guide)

### 1. Create the file
Make a folder called `my-first-page` and, inside it, a file called `index.html`. Open it in VS Code.
*Why: every website starts with an `index.html`. It is the front door.*

### 2. Write the skeleton
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>

  </body>
</html>
```
Open it in the browser. It is blank, and that is fine.
*Why: `<head>` holds information about the page (like the tab title). `<body>` holds what people see.*

### 3. Add a heading
Inside `<body>`: `<h1>Hello, I am Ada</h1>` (use the student's own name).
*Explain: a tag has an opening `<h1>` and a closing `</h1>`. The text goes between. Refresh the browser.*

### 4. Add a paragraph
`<p>I am learning web development. I like football and drawing.</p>`
*Let the student write their own sentence.*

### 5. Add an image
Put a picture in the same folder, then:
`<img src="photo.svg" alt="A simple blue picture" width="200">`
*Explain: `src` and `alt` are **attributes**, extra information inside a tag. `src` says which file, `alt` describes the image for people who can't see it.*

### 6. Add a list of favourites
```html
<h2>My favourites</h2>
<ul>
  <li>Jollof rice</li>
  <li>Football</li>
  <li>Music</li>
</ul>
```
*Explain: `ul` is a list, each `li` is one item.*

## Key words
- **Server**: a computer that stores and sends out website files.
- **Browser**: Chrome, Firefox, the program that shows websites.
- **Tag / element**: a building block of an HTML page.
- **Attribute**: extra information inside a tag, like `src`.

## Done when
- [ ] The page opens in the browser with heading, paragraph, image and list
- [ ] The student can say what a tag and an attribute are

## Extra (if they finish early)
Add a `<a href="https://...">link</a>` to a site they like, and a second paragraph.

## If they miss a session
They read this README and rebuild the project in their own repository. Then they show you.

*This repository is read-only. Students do their work in their own repository.*

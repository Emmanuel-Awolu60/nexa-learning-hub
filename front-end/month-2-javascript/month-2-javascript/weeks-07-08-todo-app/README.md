# Weeks 7-8: The DOM and the To-Do List App (Milestone 2)

**Stage:** The student knows variables, functions, arrays and objects (Weeks 5-6).
**Project:** An interactive To-Do List app: add tasks, tick them off, delete them. Finished version is in `project/`.

This is one project taught in two parts. Each part is about a week (3 sessions). Move at the student's pace and do not start Part 2 until the "Done when" box of Part 1 is ticked.

---

## Part 1 (Week 7): The DOM and events

### 1. Set up a warm-up page
Make a folder `todo-app` with `index.html`, `style.css` and `script.js`. For now, put one heading and one button in the body, then link the files:
```html
<h1 id="title">My To-Do List</h1>
<button id="color-btn">Change colour</button>
<script src="script.js"></script>
```
*Explain: JavaScript can see the page as a tree of elements. This tree is the **DOM**. Put the `<script>` at the bottom so the page exists before the code runs.*

### 2. Select an element and change it
```js
const title = document.getElementById("title");
title.textContent = "Hello from JavaScript!";
```
*Explain: `getElementById` finds an element. `textContent` is its text. Refresh and watch the heading change.*

### 3. Change a style
```js
title.style.color = "blue";
```

### 4. React to a click
```js
const colorBtn = document.getElementById("color-btn");

colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
});
```
*Explain: an **event listener** waits for something to happen (a click) and then runs a function. This is the Week 7 "Try this".*

### 5. Make it better
Let the student change the colour to a random one from an array of colours.
```js
const colors = ["lightgreen", "lightblue", "pink", "khaki"];
const random = colors[Math.floor(Math.random() * colors.length)];
```
*Why: this reuses arrays from Week 6 and shows that all the pieces connect.*

**Done when:**
- [ ] Clicking the button changes the page
- [ ] Student can explain getElementById, textContent and addEventListener in their own words

---

## Part 2 (Week 8): Build the To-Do List

Delete the warm-up code and build the real thing.

### 6. Write the HTML
```html
<main>
  <h1>My To-Do List</h1>
  <div class="add">
    <input type="text" id="task-input" placeholder="Add a new task">
    <button id="add-btn">Add</button>
  </div>
  <p id="message"></p>
  <ul id="task-list"></ul>
</main>
<script src="script.js"></script>
```
*Explain: the list `<ul>` starts empty. JavaScript will fill it.*

### 7. Style it
Use `project/style.css` as a guide, but let the student choose their own colours. Add a `.done` class that crosses out text.

### 8. Select everything we need
```js
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");
const message = document.getElementById("message");
```

### 9. Add a task
Write the `addTask` function: read `input.value`, show a message if it is empty, otherwise create an `<li>` with `document.createElement`, put the text in it, add it with `list.appendChild`, then clear the input.
*Explain: we are **creating** new elements from JavaScript and putting them on the page.*

### 10. Complete and delete
Inside `addTask`, make the task text toggle the `done` class when clicked (`classList.toggle`), and add a Delete button that removes the item (`li.remove()`).

### 11. Connect the button and the Enter key
```js
addBtn.addEventListener("click", addTask);
```
Then add a `keydown` listener on the input so pressing Enter also adds a task.

### 12. Break it on purpose
Try an empty task, a very long task, adding twenty tasks. Fix what looks wrong.
*Explain: **debugging** is normal. Open the console, read the error, find the line. Errors tell us where to look.*

**Done when:**
- [ ] Tasks can be added, ticked off and deleted
- [ ] Empty tasks show a message instead of being added
- [ ] Student can explain how addTask works, line by line
- [ ] The app is pushed to the student's own repository and published on GitHub Pages

---

## Key words
- **DOM**: the live structure of your page that JavaScript can control.
- **Event listener**: code that runs in response to an action like a click.
- **Debugging**: finding and fixing errors.

## Extra (if they finish early)
Add a counter showing how many tasks are left, or save the tasks in `localStorage` so they stay after a refresh.

## If they miss a session
They read this README and redo that part in their own repository, then show you.

*This repository is read-only. Students do their work in their own repository.*

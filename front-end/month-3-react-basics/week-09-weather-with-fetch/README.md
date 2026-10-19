# Week 9: Modern JavaScript, APIs and a Weather Page

**Stage:** The student can build the To-Do app (Month 2).
**Project:** A weather page in plain JavaScript. The student types a city and sees its current weather, pulled live from the internet. Finished version is in `project/`.

This is the first half of the Month 3 milestone. In Weeks 10-12 the student rebuilds the same app with React. Building it twice is on purpose: they feel why React helps.

---

## Part 1: Three modern JavaScript tools (warm-up)

Do these in a scratch `script.js` and watch the console. Keep it short, they are tools for the project.

### 1. Arrow functions
```js
const double = (n) => n * 2;
console.log(double(5));
```
*Explain: a shorter way to write a function. Compare it with the `function double(n) { ... }` the student already knows.*

### 2. Template literals
```js
const name = "Ada";
const age = 16;
console.log(`My name is ${name} and I am ${age}.`);
```
*Explain: backticks let us put variables inside text with `${ }`. Compare with the `+` joining from Week 5. Much cleaner.*

### 3. Destructuring
```js
const student = { name: "Ada", age: 16 };
const { name: studentName, age: studentAge } = student;
console.log(studentName, studentAge);
```
*Explain: a shortcut to pull values out of an object. We will use it to unpack the weather data.*

---

## Part 2: What is an API?

### 4. See an API with your own eyes
Paste this into the browser address bar:
```
https://geocoding-api.open-meteo.com/v1/search?name=Lagos&count=1
```
The student sees text with curly braces: this is **JSON**.
*Explain: an **API** is how one program asks another program for data. We asked a weather service "where is Lagos?" and it replied with data, not a web page. JSON looks like a JavaScript object, so JavaScript can use it directly.*

### 5. Find the numbers in the JSON
Look at `results`, then `latitude` and `longitude`. Then open this second address (use the numbers you found):
```
https://api.open-meteo.com/v1/forecast?latitude=6.45&longitude=3.4&current=temperature_2m,wind_speed_10m
```
*Have the student point to the current temperature in the JSON.*

---

## Part 3: Build the weather page

### 6. HTML
A heading, an input (`id="city-input"`), a button (`id="search-btn"`) and an empty `<p id="result">`. Link `style.css` and `script.js` like Week 8.

### 7. Ask for data with `fetch`
```js
async function getWeather(city) {
  const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
  const geoData = await geoResponse.json();
  console.log(geoData);
}
getWeather("Lagos");
```
Look at the console.
*Explain: `fetch` asks for the data, and it takes time to come back. `await` means "wait here until the answer arrives". We put `async` before the function so we are allowed to use `await`. `.json()` turns the reply into a JavaScript object.*

### 8. Get the weather for that place
Pull out `latitude` and `longitude` with destructuring, then make the second `fetch` to the forecast address, and return the pieces we need. See `project/script.js` for the full function.

### 9. Handle problems
If the city does not exist, the code should say so instead of breaking.
```js
if (!geoData.results) {
  throw new Error("City not found");
}
```
*Explain: `throw` sends out an error. The code that called `getWeather` catches it with `try ... catch` and shows a friendly message.*

### 10. Show it on the page
On button click, read the input, show "Loading...", call `getWeather`, then show the result with a template literal. Use `try ... catch` around it.

**Done when:**
- [ ] Typing a city and clicking the button shows its weather
- [ ] A made-up city shows "City not found" and does not crash
- [ ] Student can explain what an API and JSON are

---

## Key words
- **API**: a way for programs to request data from each other.
- **JSON**: a text format for structured data, very close to JavaScript objects.
- **fetch()**: the JavaScript command used to request data from an API.
- **async / await**: wait for data to arrive before continuing.
- **Template literal**: text in backticks with `${ }` for variables.
- **Destructuring**: a shortcut for pulling values out of arrays or objects.

## Extra (if they finish early)
Show the "feels" of the weather with an emoji for each condition, or show a second city side by side.

## If they miss a session
They read this README and redo that part in their own repository, then show you.

*This repository is read-only. Students do their work in their own repository.*

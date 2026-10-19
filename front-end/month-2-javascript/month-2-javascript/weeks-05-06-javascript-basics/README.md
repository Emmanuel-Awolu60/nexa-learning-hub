# Weeks 5-6: JavaScript Basics (Student Report Card)

**Stage:** The student has finished Month 1 (HTML, CSS, portfolio live).
**Project:** A report card program that works out a student's average and grade. It runs in the browser console. Finished version is in `project/`.

This is one project taught in two parts. Each part is about a week (3 sessions). Move at the student's pace and do not start Part 2 until the "Done when" box of Part 1 is ticked.

---

## Part 1 (Week 5): Variables, types and the console

### 1. Set up
Make a folder `report-card` with `index.html` and `script.js`. In `index.html`, just before `</body>`:
```html
<script src="script.js"></script>
```
Open the page in the browser, press F12 and open the **Console** tab.
*Explain: HTML is structure, CSS is style, JavaScript is behaviour. It makes the page do things.*

### 2. Make a variable
In `script.js`:
```js
let name = "Ada";
let age = 16;
console.log(name);
console.log(age);
```
Refresh and look in the console.
*Explain: a **variable** is a labelled box that holds a value. `console.log` prints it so we can see it.*

### 3. Meet the data types
```js
let isStudent = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```
*Explain: text is a **string** (always in quotes), a **number** has no quotes, and a **boolean** is true or false.*

### 4. Join things together
```js
console.log("My name is " + name + " and I am " + age + " years old.");
```
*Let the student write the sentence with their own name and age. Explain that `+` joins strings.*

### 5. Do some maths
```js
let math = 70;
let english = 55;
console.log(math + english);
console.log((math + english) / 2);
```
*Why: this is the first step towards the average in Part 2.*

**Done when:**
- [ ] Student can create variables and print them in the console
- [ ] Student can say what a string, a number and a boolean are
- [ ] Student can join text and variables into a sentence

---

## Part 2 (Week 6): Decisions, functions, arrays and objects

### 6. Make decisions with if/else
```js
let score = 62;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```
Change `score` and refresh to see both results.
*Explain: the code checks the condition. If true it runs the first block, if not it runs the `else` block.*

### 7. Write your first function
```js
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
```
*Explain: a **function** is a reusable block of code. `n` is the input, `return` is the answer it gives back. `%` gives the remainder after dividing.*

### 8. Store lists in arrays
```js
let scores = [70, 55, 90, 82];
console.log(scores[0]);
console.log(scores.length);
scores.push(60);
```
*Explain: an **array** is an ordered list. Counting starts at 0, so `scores[0]` is the first item.*

### 9. Loop through the array
```js
let total = 0;
for (let i = 0; i < scores.length; i++) {
  total = total + scores[i];
}
console.log(total);
```
*Explain: the loop repeats once for each item. Walk through the first two rounds on paper with the student.*

### 10. Group information in an object
```js
let student = {
  name: "Ada",
  age: 16,
  scores: [70, 55, 90, 82]
};
console.log(student.name);
console.log(student.scores);
```
*Explain: an **object** groups related information using labelled fields.*

### 11. Put it all together
Replace the practice code with the full program in `project/script.js`: an `average` function (uses the loop), a `getGrade` function (uses if/else), and the `student` object. Build it piece by piece, so the student writes the functions themselves.

**Done when:**
- [ ] The program prints the student's name, scores, average and grade
- [ ] Student can explain what each of the two functions does
- [ ] Student changes the scores and the grade changes

---

## Key words
- **Variable**: a named storage container.
- **String / number / boolean**: text, a number, true or false.
- **Console**: a browser tool for testing JavaScript.
- **Function**: a reusable set of instructions.
- **Array**: an ordered list, e.g. `["red", "blue"]`.
- **Object**: labelled data, e.g. `{ name: "Ada" }`.

## Extra (if they finish early)
Make the program work for two students (an array of objects) and print each report.

## If they miss a session
They read this README and redo that part in their own repository, then show you.

*This repository is read-only. Students do their work in their own repository.*

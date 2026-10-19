# Weeks 10-12: React and the Weather App (Milestone 3)

**Stage:** The student built the plain JavaScript weather page in Week 9.
**Project:** The same weather app rebuilt with React, using components, props, state and hooks. Finished version is in `project/`.

This is one project taught in three parts. Each part is about a week (3 sessions). Move at the student's pace and do not start the next part until the "Done when" box of the current part is ticked.

**Before Part 1:** make sure Node.js (the LTS version) is installed on the student's computer. Check with `node -v` in the terminal. React tools need it. Do not explain Node yet, just say "this is the engine that runs our React tools". We learn what it really is in Month 4.

---

## Part 1 (Week 10): Components, JSX and props

### 1. Create the React project
```bash
npm create vite@latest weather-app -- --template react
cd weather-app
npm install
npm run dev
```
Open the address the terminal shows (usually `http://localhost:5173`).
*Explain: React is a JavaScript library for building pages out of small reusable pieces called **components**. Vite is the tool that sets up and runs the project.*

### 2. Look around, then clean up
Show the student `index.html`, `src/main.jsx` and `src/App.jsx`. Delete the demo content in `App.jsx` and leave a single heading.
*Explain: `main.jsx` puts our `App` component onto the page. Everything we build lives inside `App`.*

### 3. Write the first component
Create `src/components/WeatherCard.jsx`:
```jsx
function WeatherCard() {
  return (
    <section className="card">
      <h2>Lagos, Nigeria</h2>
      <p className="temp">29°C</p>
      <p>Partly cloudy</p>
    </section>
  );
}

export default WeatherCard;
```
Use it in `App.jsx` with `<WeatherCard />` (and the `import` line at the top).
*Explain: a component is a function that returns what to show. This HTML-like code is **JSX**. `export` and `import` let us share it between files.*

### 4. Make it reusable with props
```jsx
function WeatherCard({ city, temperature, description }) {
  return (
    <section className="card">
      <h2>{city}</h2>
      <p className="temp">{temperature}°C</p>
      <p>{description}</p>
    </section>
  );
}
```
Then in `App.jsx`:
```jsx
<WeatherCard city="Lagos" temperature={29} description="Partly cloudy" />
<WeatherCard city="London" temperature={14} description="Rain" />
```
*Explain: **props** are the information we pass into a component, like the attributes on an HTML tag. One component, many cards. This is the Week 10 "ProfileCard" idea.*

**Done when:**
- [ ] The app shows two weather cards from one component
- [ ] Student can explain what a component, JSX and props are

---

## Part 2 (Week 11): State and hooks

### 5. Add a search bar component
Create `src/components/SearchBar.jsx`. It has a text input and a Search button.

### 6. Remember what the user types: `useState`
```jsx
import { useState } from "react";

function SearchBar() {
  const [city, setCity] = useState("");

  return (
    <input
      value={city}
      onChange={(event) => setCity(event.target.value)}
      placeholder="Type a city"
    />
  );
}
```
*Explain: **state** is data a component remembers and can change. `useState("")` gives us the current value (`city`) and a function to change it (`setCity`). When state changes, React redraws the component. Warm up with the counter from the notes first.*

### 7. Pass a function down as a prop
`App` owns the search. `SearchBar` calls `onSearch(city)` when the form is submitted:
```jsx
function handleSubmit(event) {
  event.preventDefault();
  onSearch(city.trim());
}
```
*Explain: props can carry functions too. The child tells the parent "the user searched for this".*

### 8. Load data automatically: `useEffect`
In `App.jsx`, load a default city when the app first appears:
```jsx
useEffect(() => {
  search("Lagos");
}, []);
```
*Explain: `useEffect` runs code at certain times. The empty `[]` means "only once, when the component first shows".*

**Done when:**
- [ ] Typing in the box updates state
- [ ] The app loads Lagos automatically on start
- [ ] Student can explain useState and useEffect in their own words

---

## Part 3 (Week 12): Connect everything into a real app

### 9. Move the API code into its own file
Create `src/api.js` and move in the `getWeather` function from Week 9 (and `describeCode`), with `export`. Show the student it is nearly the same code.
*Why: components show things, `api.js` gets data. Each file has one job.*

### 10. Hold the app's data in `App`
```jsx
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
```

### 11. Write the `search` function
Set `loading` to true, call `getWeather` inside `try ... catch`, then store the result in `weather` or the message in `error`, and finally set `loading` back to false.
*Explain: three states, three screens: loading, error, and result.*

### 12. Show the right thing
```jsx
{loading && <p>Loading...</p>}
{error && <p className="error">{error}</p>}
{weather && !loading && <WeatherCard weather={weather} />}
```
*Explain: `&&` means "show this only if the left side is true".*

### 13. Test and polish
Try a real city, a made-up city and an empty search. Let the student change the colours and layout.

### 14. Push to their repository
The student pushes the project to their own GitHub repository. Make sure `node_modules` is not committed (Vite already creates a `.gitignore` for this).

**Done when:**
- [ ] Searching any city shows its weather, loading and error states work
- [ ] The app is made of at least three components plus an `api.js` file
- [ ] Student can say which component owns which piece of data
- [ ] Project is pushed to the student's own repository

---

## Key words
- **Component**: a reusable, self-contained piece of a user interface.
- **JSX**: HTML-like syntax used inside React JavaScript files.
- **Props**: data passed into a component.
- **State**: data a component keeps track of and can update.
- **useState / useEffect**: React tools for state and for running code at certain times.

## Run the finished project
```bash
cd project
npm install
npm run dev
```

## Extra (if they finish early)
Add a "Recent searches" list in state, or a °C / °F toggle button.

## If they miss a session
They read this README and redo that part in their own repository, then show you.

*This repository is read-only. Students do their work in their own repository.*

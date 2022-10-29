import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState("");
  const [displayCharacter, setDisplayCharacter] = useState(false);

  return (
    <div className="App">
      <h1>Buid A Hero</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Height:</label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label>SuperPower:</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setSuperPower(event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setDisplayCharacter(true);
        }}
      >
        Display Character
      </button>
      <div>
        <h1>Hero Info</h1>
        {displayCharacter && (
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>SuperPower: {superPower}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

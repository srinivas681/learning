import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("Any render");
  });
  useEffect(() => {
    console.log("First render");
  }, []);
  useEffect(() => {
    console.log("Counter change");
    if (counter === 5) {
      alert("5");
    }
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <div>{counter} shirts</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            if (counter === 0) {
              return alert("Negative not allowed");
            }
            setCounter(counter - 1);
          }}
        >
          Decrease
        </button>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);
  const [reqprice, setReqprice] = useState(100);

  useEffect(() => {
    console.log("Any render");
  });
  useEffect(() => {
    console.log("First render");
  }, []);
  useEffect(() => {
    console.log("Counter change");
    if (counter <= 5) {
      // alert("5");
      setTotal(counter * reqprice);
    } else {
      // if (counter >=6)
      let discountPrice = (reqprice * 9) / 10;
      setTotal(5 * reqprice + (counter - 5) * discountPrice);

      // setTotal(counter * 90);
    }
  }, [counter, reqprice]);

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
        <input
          type="number"
          value={reqprice}
          onChange={(e) => {
            setReqprice(Number(e.target.value));
          }}
        />
        <div>Total Price : {total}</div>
      </header>
    </div>
  );
}

export default App;

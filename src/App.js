import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [err, setErr] = useState(false);
  const [list, setList] = useState(new Values("#f150ff").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (e) {
      setErr(true);
      console.log(e);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${err ? "error" : null}`}
            placeholder="#0f6589"
          />

          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;

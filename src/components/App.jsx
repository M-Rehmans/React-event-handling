import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  var [name, setusername] = useState("");
  var [headingText, setHeading] = useState("");
  function handleChange(event) {
    setusername(event.target.value);
  }
  function headingAssign() {
    setHeading(name);
  }

  function handleBackground() {
    setMouseOver(true);
  }
  function bgWhite() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="What's your name?"
        value={name}
      />
      <button
        onClick={headingAssign}
        onMouseOver={handleBackground}
        onMouseOut={bgWhite}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

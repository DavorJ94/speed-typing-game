import React, { useState } from "react";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const calculateWordCount = (inputParam) => {
    let wordCount = inputParam
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
    console.log(wordCount);
    return wordCount;
  };

  return (
    <div>
      <h1>Speed typing game</h1>
      <textarea
        value={inputText}
        onChange={handleInputText}
        placeholder="Start typing"
      />
      <h4>For remaining time</h4>
      <button onClick={() => calculateWordCount(inputText)}>Start</button>
      <h1>For word count</h1>
    </div>
  );
}

export default App;

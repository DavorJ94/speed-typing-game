import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const TIME_TO_TYPE = 5;
  const [inputText, setInputText] = useState("");
  const [remainingTime, setRemainingTime] = useState(TIME_TO_TYPE);
  const [start, setStart] = useState(false);
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const textareaRef = useRef(null);

  const calculateWordCount = (inputParam) => {
    let wordCount = inputParam
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
    return wordCount;
  };

  const startAgain = () => {
    setStart(true);
    setRemainingTime(TIME_TO_TYPE);
    setInputText("");
  };

  useEffect(() => {
    if (remainingTime > 0 && start) {
      setTimeout(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
      textareaRef.current.focus();
    } else {
      setStart(false);
    }
  }, [remainingTime, start]);

  return (
    <div>
      <h1>Speed typing game</h1>
      <textarea
        ref={textareaRef}
        disabled={!start}
        value={inputText}
        onChange={handleInputText}
        placeholder="Start typing"
      />
      <h4>Remaining time: {remainingTime}</h4>
      <button disabled={start} onClick={startAgain}>
        Start
      </button>
      <h1>
        Word count: {remainingTime === 0 ? calculateWordCount(inputText) : ""}
      </h1>
    </div>
  );
}

export default App;

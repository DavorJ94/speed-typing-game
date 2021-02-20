import React from "react";
import useWordGame from "./useWordGame";
import "./App.css";

function App() {
  const {
    textareaRef,
    start,
    inputText,
    handleInputText,
    remainingTime,
    startAgain,
    calculateWordCount,
  } = useWordGame();
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

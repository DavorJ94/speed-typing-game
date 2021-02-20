import { useState, useEffect, useRef } from "react";

function useWordGame(timeToType = 10) {
  const [inputText, setInputText] = useState("");
  const [remainingTime, setRemainingTime] = useState(timeToType);
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
    setRemainingTime(timeToType);
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

  return {
    textareaRef,
    start,
    inputText,
    handleInputText,
    remainingTime,
    startAgain,
    calculateWordCount,
  };
}

export default useWordGame;

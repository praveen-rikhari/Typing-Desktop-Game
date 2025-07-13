import { useEffect, useRef, useState } from "react";
import "./App.css";
import SENTENCES from "./sentences";

function App() {
  const [testSentence, setTestSentence] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [finished, setFinished] = useState(false);
  const inputRef = useRef();

  const loadNewSentence = () => {
    const random = SENTENCES[Math.floor(Math.random() * SENTENCES.length)];
    setTestSentence(random);
    setInput("");
    setStartTime(null);
    setElapsedTime(0);
    setWpm(0);
    setFinished(false);
    clearInterval(intervalId);
    setIntervalId(null);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    loadNewSentence();
  }, []);

  useEffect(() => {
    if (input.length === 1 && !startTime) {
      const now = Date.now();
      setStartTime(now);

      const id = setInterval(() => {
        setElapsedTime((Date.now() - now) / 1000);
      }, 100);
      setIntervalId(id);
    }

    if (input.length > 0 && input === testSentence && !finished) {
      const end = Date.now();
      setFinished(true);
      clearInterval(intervalId);

      const timeInMinutes = (end - startTime) / 1000 / 60;
      const words = testSentence.trim().split(/\s+/).length;
      setWpm(Math.round(words / timeInMinutes));
    }
  }, [input]);

  const handlePaste = (e) => {
    e.preventDefault();
    alert("Nice try! Don't be oversmart 😏 — this won't work.");
  };

  return (
    <div className="app">
      <h1 className="title">Typing Speed Challenger</h1>
      <p className="sentence">{testSentence}</p>

      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => {
          if (!finished && e.target.value.length <= testSentence.length) {
            setInput(e.target.value);
          }
        }}
        onPaste={handlePaste}
        rows={4}
        className="input-area"
        disabled={finished}
        placeholder="Start typing here..."
      />

      {!finished && input.length === 0 && (
        <p className="start-tip">Start typing to begin the challenge ⌨️</p>
      )}

      <div className="results">
        <p className="stat">⏱️ Timer: {elapsedTime.toFixed(2)}s</p>

        {finished && (
          <>
            <p className="stat">⚡ WPM: {wpm}</p>
            <button className="restart-btn" onClick={loadNewSentence}>
              New Challenge
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

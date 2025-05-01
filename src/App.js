import React from "react";
import "./App.css";
import countWord from "./countword";


// function countWord() {
//   const text = document.getElementById("text").value.trim();

//   const words = text.split(/\s+/).filter(word => word.length > 0);
//   const wordCount = words.length;

//   const charCount = text.length;
//   const charCountNoSpace = text.replace(/\s/g, "").length;

//   document.getElementById("wordCount").innerText = wordCount;
//   document.getElementById("charCount").innerText = charCount;
//   document.getElementById("charCountNoSpace").innerText = charCountNoSpace;
// }

function App() {
  return (
    <div className="main-container">
      <h1 className="heading">Word Counter</h1>

      <textarea
        id="text"
        placeholder="Type or paste your text here..."
        onInput={countWord}
      ></textarea>
         <div className="output-container">
      <div className="Output">
        <p>
          <strong>Words:</strong> <span id="wordCount">0</span>
        </p>
        <p>
          <strong>Characters (with Spaces):</strong>{" "}
          <span id="charCount">0</span>
        </p>
        <p>
          <strong>Characters (without Spaces):</strong>{" "}
          <span id="charCountNoSpace">0</span>
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default App;

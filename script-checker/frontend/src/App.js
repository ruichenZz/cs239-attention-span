import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [script, setScript] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setSuggestions(null);

    if (!script.trim()) {
      setError("Please enter a script.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8001/check_script", {
        script,
        user_prompt: userPrompt || null,  // Send null if empty
      });

      setSuggestions(response.data.suggestions);
    } catch (err) {
      setError("Failed to analyze script.");
    }
  };

  return (
    <div className="app-container">
      <h1>Script Checker</h1>

      <div className="main-content">
        <textarea
          placeholder="Enter your script here..."
          value={script}
          onChange={(e) => setScript(e.target.value)}
          className="text-input"
        />

        <textarea
          placeholder="Optional: Custom prompt for analysis. Default is 'Analyze the following script for clarity, engagement, and emotional impact. Provide actionable feedback on structure, flow, and potential improvements.for example, the suggestion can be: ... this part is too information densed, audience might feel overwhelmed, so could add story or image to demonstrate what just been discussed.'"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          className="text-input"
        />
      </div>

      <button onClick={handleSubmit} className="action-button">
        Check Script
      </button>

      {error && <p className="error-message">{error}</p>}

      {suggestions && (
        <div class="wrap" className="results-container">
          <h2>Suggestions</h2>
          <pre>{suggestions}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

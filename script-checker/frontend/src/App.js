import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import HighlightedScript from "./HighlightedScript";

function App() {
  const [script, setScript] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [error, setError] = useState("");

  // Track whether we're in read-only (highlighted) mode or editing mode
  const [isReadOnly, setIsReadOnly] = useState(false);

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
        user_prompt: userPrompt || null,
      });
      setSuggestions(response.data);

      // Automatically switch to read-only (highlight) mode
      setIsReadOnly(true);
    } catch (err) {
      setError("Failed to analyze script.");
    }
  };

  const Timeline = ({ data }) => {
    if (!data?.duration) return null;
    
    const totalDuration = data.duration.reduce((sum, curr) => sum + curr, 0);
    const categoryColors = {
      informational: "#3b82f6",
      comedic: "#f59e0b",
      storytelling: "#10b981",
      visual_presentation: "#8b5cf6",
      default: "#e5e7eb",
    };

    return (
      <div className="timeline-container">
        <div className="timeline">
          {data.duration.map((duration, index) => {
            let category = "default";
            if (data.information.includes(index)) category = "informational";
            if (data.comedic.includes(index)) category = "comedic";
            if (data.storytelling.includes(index)) category = "storytelling";
            if (data.visual_presentation.includes(index)) category = "visual_presentation";

            return (
              <div
                key={index}
                className="timeline-segment"
                style={{
                  width: `${(duration / totalDuration) * 100}%`,
                  backgroundColor: categoryColors[category],
                }}
                title={`Paragraph ${index + 1}: ${category}`}
              />
            );
          })}
        </div>
        <div className="timeline-legend">
          {Object.entries(categoryColors).map(([category, color]) =>
            category !== "default" && (
              <div key={category} className="legend-item">
                <div className="legend-color" style={{ backgroundColor: color }} />
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1>Script Checker</h1>
      
      <div className="main-content">
        <div className="editor-container">
          {isReadOnly ? (
            // ---------------------
            // READ-ONLY (highlighted) mode
            // ---------------------
            <div style={{ marginBottom: "16px" }}>
              {suggestions ? (
                <HighlightedScript script={script} suggestions={suggestions} />
              ) : (
                <div
                  style={{
                    backgroundColor: "#e5e7eb",
                    padding: "8px",
                    borderRadius: "4px"
                  }}
                >
                  {script}
                </div>
              )}

              <button
                onClick={() => setIsReadOnly(false)}
                className="edit-button"
              >
                Edit
              </button>
            </div>
          ) : (
            // ---------------------
            // EDIT mode (textarea)
            // ---------------------
            <div>
              <textarea
                placeholder="Enter your script here..."
                value={script}
                onChange={(e) => setScript(e.target.value)}
                className="text-input"
              />
            </div>
          )}
        </div>

        <div className="sidebar">
          <div className="prompt-section">
            <textarea
              placeholder="Optional: Custom prompt for analysis..."
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              className="text-input prompt-input"
            />
          </div>
          
          <div className="results-container">
            <button onClick={handleSubmit} className="action-button">
              Check Script
            </button>

            {error && <p className="error-message">{error}</p>}

            {suggestions && (
              <>
                <Timeline data={suggestions} />
                <div className="feedback-section">
                  <h2>Feedback</h2>
                  <div className="feedback-content">
                    <p>{suggestions.feedback}</p>
                    
                    <div className="category-lists">
                      <h3>Segment Analysis</h3>
                      <div>
                        <h4>Informational Paragraphs</h4>
                        <p>{suggestions.information.join(", ") || "None"}</p>
                      </div>
                      <div>
                        <h4>Comedic Paragraphs</h4>
                        <p>{suggestions.comedic.join(", ") || "None"}</p>
                      </div>
                      <div>
                        <h4>Storytelling Paragraphs</h4>
                        <p>{suggestions.storytelling.join(", ") || "None"}</p>
                      </div>
                      <div>
                        <h4>Visual Presentation Paragraphs</h4>
                        <p>{suggestions.visual_presentation.join(", ") || "None"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

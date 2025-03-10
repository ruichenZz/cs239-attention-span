import React from "react";

const HighlightedScript = ({ script, suggestions }) => {
  if (!suggestions) return null; // Don’t render until we have analysis data
  
  // 1. Split script into paragraphs the same way we did on the backend
  const paragraphs = script
    .split("\n\n") // <-- Split on double newline
    .map((p) => p.trim())
    .filter(Boolean);

  // 2. Define category colors (same ones used in Timeline)
  const categoryColors = {
    informational: "#3b82f6",
    comedic: "#f59e0b",
    storytelling: "#10b981",
    visual_presentation: "#8b5cf6",
    default: "#e5e7eb",
  };

  return (
    <div className="highlighted-script">
      {paragraphs.map((paragraph, index) => {
        let category = "default";
        if (suggestions.information.includes(index)) {
          category = "informational";
        } else if (suggestions.comedic.includes(index)) {
          category = "comedic";
        } else if (suggestions.storytelling.includes(index)) {
          category = "storytelling";
        } else if (suggestions.visual_presentation.includes(index)) {
          category = "visual_presentation";
        }

        return (
          <p
            key={index}
            className="highlighted-paragraph"
            style={{
              backgroundColor: categoryColors[category],
              padding: "8px",
              borderRadius: "4px",
              marginBottom: "8px",
              whiteSpace: "pre-wrap", // preserve line breaks
            }}
          >
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};

export default HighlightedScript;

import React from "react";

const HighlightedScript = ({ script, suggestions }) => {
  if (!suggestions) return null;

  const paragraphs = script
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const categoryColors = {
    informational: "#3b82f6",
    comedic: "#f59e0b",
    storytelling: "#10b981",
    visual_presentation: "#8b5cf6",
    default: "#e5e7eb",
  };

  const getCategories = (index) => {
    const categories = [];
    if (suggestions.information.includes(index)) categories.push("informational");
    if (suggestions.comedic.includes(index)) categories.push("comedic");
    if (suggestions.storytelling.includes(index)) categories.push("storytelling");
    if (suggestions.visual_presentation.includes(index)) categories.push("visual_presentation");
    return categories;
  };

  const getGradientBackground = (categories) => {
    if (categories.length === 0) return categoryColors.default;
    if (categories.length === 1) return categoryColors[categories[0]];
    // Gradient transition for two categories
    const [first, second] = categories;
    return `linear-gradient(135deg, ${categoryColors[first]} 50%, ${categoryColors[second]} 50%)`;
  };

  return (
    <div className="highlighted-script">
      {paragraphs.map((paragraph, index) => {
        const categories = getCategories(index);
        const background = getGradientBackground(categories);

        return (
          <div key={index} style={{ position: "relative", marginBottom: "12px" }}>
            <p
              className="highlighted-paragraph"
              style={{
                background: background,
                padding: "8px",
                borderRadius: "4px",
                whiteSpace: "pre-wrap",
                color: "#fff",
              }}
              title={categories.join(", ")}
            >
              {paragraph}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightedScript;

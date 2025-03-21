import React from "react";
import { Box, Typography } from "@mui/material";


const HighlightedScript = ({ script, suggestions }) => {
  if (!suggestions) return null;

  // Split paragraphs on double newlines
  const paragraphs = script
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const categoryColors = {
    informational: "#264653",
    comedic: "#e07a5f",
    storytelling: "#e9c46a",
    visual_presentation: "#219ebc",
    neutral: "#8d99ae",
  };

  const getCategories = (index) => {
    const categories = [];
    if (suggestions.information.includes(index)) categories.push("informational");
    if (suggestions.comedic.includes(index)) categories.push("comedic");
    if (suggestions.storytelling.includes(index)) categories.push("storytelling");
    if (suggestions.visual_presentation.includes(index)) categories.push("visual_presentation");
    return categories.length ? categories : ["neutral"];
  };

  return (
    <Box>
      {paragraphs.map((paragraph, index) => {
        const categories = getCategories(index);

        // Build a gradient if multiple categories
        let background;
        if (categories.length === 1) {
          background = categoryColors[categories[0]];
        } else {
          const stops = categories.map(
            (cat, i) => `${categoryColors[cat]} ${(i / categories.length) * 100}%`
          );
          background = `linear-gradient(to right, ${stops.join(", ")})`;
        }

        return (
          <Box
            key={index}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 1,
              background,
              color: "#ffffff",
              whiteSpace: "pre-wrap",
              position: "relative",
            }}
            title={categories.join(", ")}
          >
            <Typography variant="body1">{paragraph}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default HighlightedScript;

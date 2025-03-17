import React from "react";
import { Box, Typography } from "@mui/material";

function Timeline({ data, setHoveredParagraph, setClickedParagraph }) {
  if (!data?.duration) return null;

  const totalDuration = data.duration.reduce((sum, curr) => sum + curr, 0);
  const categoryColors = {
    informational: "#264653",
    comedic: "#e07a5f",
    storytelling: "#e9c46a",
    visual_presentation: "#219ebc",
    neutral: "#8d99ae",
  };

  // Helper to get categories for a given paragraph index
  const getCategories = (index) => {
    const categories = [];
    if (data.information.includes(index)) categories.push("informational");
    if (data.comedic.includes(index)) categories.push("comedic");
    if (data.storytelling.includes(index)) categories.push("storytelling");
    if (data.visual_presentation.includes(index)) categories.push("visual_presentation");
    return categories.length ? categories : ["neutral"];
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          height: 20,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        {data.duration.map((duration, index) => {
          const categories = getCategories(index);
          const widthPercent = totalDuration ? (duration / totalDuration) * 100 : 0;

          // If multiple categories, do a CSS gradient
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
                width: `${widthPercent}%`,
                background,
                transition: "width 0.3s",
                cursor: "pointer",
                borderRight: "1px solid #fff",
              }}
              title={`Paragraph ${index + 1}: ${categories.join(", ")}`}
              onMouseEnter={() => setHoveredParagraph(index)}
              onMouseLeave={() => setHoveredParagraph(null)}
              onClick={() => setClickedParagraph(index)}
            />
          );
        })}
      </Box>
      <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
        {Object.entries(categoryColors).map(([category, color]) => (
            <Box key={category} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                sx={{
                width: 12,
                height: 12,
                borderRadius: 1,
                backgroundColor: color,
                }}
            />
            <Typography variant="body2">
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>
            </Box>
        ))}
        </Box>
    </Box>
  );
}

export default Timeline;

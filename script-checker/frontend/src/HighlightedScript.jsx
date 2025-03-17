import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const HighlightedScript = ({ script, suggestions, hoveredParagraph, clickedParagraph }) => {
  if (!suggestions) return null;

  // Split script into paragraphs
  const paragraphs = script.split("\n\n").map((p) => p.trim()).filter(Boolean);

  const categoryColors = {
    informational: "#264653",
    comedic: "#e07a5f",
    storytelling: "#e9c46a",
    visual_presentation: "#219ebc",
    neutral: "#8d99ae",
  };


  const getCategories = (index) => {
    if (!suggestions) return ["neutral"];

    const { information = [], comedic = [], storytelling = [], visual_presentation = [] } = suggestions;
    const categories = [];

    if (information.includes(index)) categories.push("informational");
    if (comedic.includes(index)) categories.push("comedic");
    if (storytelling.includes(index)) categories.push("storytelling");
    if (visual_presentation.includes(index)) categories.push("visual_presentation");
    console.log("Paragraph Index:", index, "Categories:", categories);

    return categories.length ? categories : ["neutral"];
  };

  // Create refs for all paragraphs
  const paragraphRefs = useRef([]);

  useEffect(() => {
    if (clickedParagraph !== null && paragraphRefs.current[clickedParagraph]) {
      paragraphRefs.current[clickedParagraph].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [clickedParagraph]);

  return (
    <Box>
      {paragraphs.map((paragraph, index) => {
        const categories = getCategories(index);

        let background = categories.length === 1
          ? categoryColors[categories[0]]
          : `linear-gradient(to right, ${categories.map((cat, i) => `${categoryColors[cat]} ${(i / categories.length) * 100}%`).join(", ")})`;

        return (
          <Box
            key={index}
            ref={(el) => (paragraphRefs.current[index] = el)} // Assign ref correctly
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 1,
              background: hoveredParagraph === index ? "#a0c4ff" : background,
              color: "#ffffff",
              whiteSpace: "pre-wrap",
              display: "flex",
              alignItems: "center",
              transition: "background 0.2s ease-in-out",
            }}
            title={categories.join(", ")}
          >
            {suggestions && (
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  mr: 2,
                  minWidth: "25px",
                  textAlign: "right",
                }}
              >
                {index + 1}.
              </Typography>
            )}

            <Typography variant="body1">{paragraph}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default HighlightedScript;

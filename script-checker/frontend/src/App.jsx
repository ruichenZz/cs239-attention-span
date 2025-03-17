// export default App;
import React, { useState } from "react";
import axios from "axios";

// Material UI imports
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import HighlightedScript from "./HighlightedScript";
import Timeline from "./Timeline"; // We'll separate Timeline into its own component for clarity

function App() {
  const [script, setScript] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [error, setError] = useState("");
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
      setIsReadOnly(true);
    } catch (err) {
      setError("Failed to analyze script.");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Script Checker
      </Typography>

      <Grid container spacing={2} sx={{ height: "80vh" }}>
        {/* Left side: Script Editor or Highlighted View */}
        <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column" }}>
          <Paper sx={{ p: 2, flex: 1, overflow: "auto" }}>
            {isReadOnly ? (
              <>
                {suggestions ? (
                  <HighlightedScript script={script} suggestions={suggestions} />
                ) : (
                  <Box
                    sx={{
                      bgcolor: "#f0f0f0",
                      p: 2,
                      borderRadius: 1,
                      mb: 2,
                    }}
                  >
                    {script}
                  </Box>
                )}
                <Button
                  variant="contained"
                  onClick={() => setIsReadOnly(false)}
                  sx={{ mt: 2 }}
                >
                  Edit
                </Button>
              </>
            ) : (
              <TextField
                label="Enter your script here"
                multiline
                minRows={15}
                value={script}
                onChange={(e) => setScript(e.target.value)}
                variant="outlined"
                fullWidth
              />
            )}
          </Paper>
        </Grid>

        {/* Right side: Prompt + Results */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <TextField
              label="Optional: Custom prompt"
              multiline
              minRows={5}
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Check Script
            </Button>
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
          </Paper>

          {suggestions && (
            <Paper sx={{ p: 2, overflowY: "auto", height: "calc(100% - 120px)" }}>
              <Timeline data={suggestions} />

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Feedback
              </Typography>
              <Typography variant="body1" gutterBottom>
                {suggestions.feedback}
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Segment Analysis
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="subtitle1">
                  <strong>Informational Paragraphs:</strong>{" "}
                  {suggestions.information.join(", ") || "None"}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Comedic Paragraphs:</strong>{" "}
                  {suggestions.comedic.join(", ") || "None"}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Storytelling Paragraphs:</strong>{" "}
                  {suggestions.storytelling.join(", ") || "None"}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Visual Presentation Paragraphs:</strong>{" "}
                  {suggestions.visual_presentation.join(", ") || "None"}
                </Typography>
              </Box>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

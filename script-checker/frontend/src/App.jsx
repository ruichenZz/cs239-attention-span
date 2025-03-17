import React, { useState, useCallback, useRef } from "react";
import axios from "axios";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  IconButton
} from "@mui/material";

import HighlightedScript from "./HighlightedScript";
import Timeline from "./Timeline";
import uploadImageIcon from "./assets/uploadIcon.png";

function App() {
  const [script, setScript] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [error, setError] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(false);

  // --- Version Control State ---
  const [versions, setVersions] = useState([]); 
  const [showVersions, setShowVersions] = useState(false); 

  // Track mode of entry: "manual" or "upload"
  const [mode, setMode] = useState("manual");

  // Ref to track cursor position in the multiline TextField
  const textFieldRef = useRef(null);

  const [hoveredParagraph, setHoveredParagraph] = useState(null);
  const [clickedParagraph, setClickedParagraph] = useState(null);


  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  // --- DRAG & DROP LOGIC FOR TEXT FILES ---
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setScript(event.target.result);
        };
        reader.readAsText(file);
      }
    },
    [setScript]
  );

  // --- FILE UPLOAD FOR TEXT FILES ---
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setScript(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  // --- IMAGE UPLOAD FOR INSERTING INTO SCRIPT ---
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const textArea = textFieldRef.current; 
    if (!textArea) return;

    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;

    // Insert "[image inserted]" placeholder at the cursor position
    const newText =
      script.substring(0, startPos) +
      "\n[image inserted]\n" +
      script.substring(endPos);

    setScript(newText);
  };

  // --- Analysis Submit ---
  const handleSubmit = async () => {
    setError("");
    setSuggestions(null);

    if (!script.trim()) {
      setError("Please enter or upload a script.");
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

  // --- Version Control Handlers ---
  const handleSaveVersion = () => {
    // Create a version snapshot
    const newVersion = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      script,
      userPrompt
    };

    setVersions((prev) => [newVersion, ...prev]); 
  };

  const handleLoadVersion = (version) => {
    // Revert the main state fields to the version's data
    setScript(version.script);
    setUserPrompt(version.userPrompt);

    setSuggestions(null);
    setIsReadOnly(false);
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
            {/* Mode Toggle (Manual vs. File Upload) only shown when not in read-only mode */}
            {!isReadOnly && (
              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleModeChange}
                sx={{ mb: 2 }}
              >
                <ToggleButton value="manual">Manual</ToggleButton>
                <ToggleButton value="upload">File Upload</ToggleButton>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    position: "fixed",
                    bottom: "20%",
                    left: "20px",
                    transform: "translateY(-50%)",
                    zIndex: 1000
                  }}
                >
                  Check Script
                </Button>
              </ToggleButtonGroup>

            )}

            {isReadOnly ? (
              // ---------------------
              // READ-ONLY (highlighted) mode
              // ---------------------
              <>
                {suggestions ? (
                  <HighlightedScript script={script} suggestions={suggestions} hoveredParagraph={hoveredParagraph} clickedParagraph={clickedParagraph} />
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
                  sx={{ mt: 2, mr: 1 }}
                >
                  Edit
                </Button>
                {/* You might let users save a version after analyzing */}
                <Button variant="outlined" sx={{ mt: 2 }} onClick={handleSaveVersion}>
                  Save Version
                </Button>
              </>
            ) : mode === "manual" ? (
              // ---------------------
              // MANUAL MODE
              // ---------------------
              <>
                <TextField
                  label="Enter your script here"
                  multiline
                  minRows={15}
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  variant="outlined"
                  fullWidth
                  inputRef={textFieldRef}
                />

                <Box sx={{ mt: 2 }}>
                  {/* Insert Image Button */}
                  <IconButton
                    component="label"
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: 1,
                      p: 1,
                      mr: 2
                    }}
                    title="Insert image"
                  >
                    <Box
                      component="img"
                      src={uploadImageIcon}
                      alt="Upload Icon"
                      sx={{ width: 46, height: 36 }}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageUpload}
                    />
                  </IconButton>

                  {/* Save Version Button (for manual mode) */}
                  <Button variant="outlined" onClick={handleSaveVersion}>
                    Save Version
                  </Button>
                </Box>
              </>
            ) : (
              // ---------------------
              // FILE UPLOAD MODE
              // ---------------------
              <Box
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: 2,
                  p: 2,
                  textAlign: "center",
                  color: "#999",
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Drag &amp; drop your file here
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  or
                </Typography>
                <Button variant="contained" component="label">
                  Browse File
                  <input
                    type="file"
                    accept=".txt,.md,.docx,.json"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
                {script && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2">
                      <strong>Preview:</strong>
                    </Typography>
                    <Paper sx={{ maxHeight: 200, overflow: "auto", p: 1 }}>
                      <Typography variant="body2" whiteSpace="pre-wrap">
                        {script}
                      </Typography>
                    </Paper>
                  </Box>
                )}
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Right side: Prompt + Results */}
        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column" }}>
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
            <Button className="floating-button" variant="contained" fullWidth onClick={handleSubmit}>
              Check Script
            </Button>
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            {/* Version History Toggle */}
            <Button
              variant="text"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => setShowVersions((prev) => !prev)}
            >
              {showVersions ? "Hide Version History" : "Show Version History"}
            </Button>
          </Paper>

          {suggestions && (
            <Paper sx={{ p: 2, overflowY: "auto", flex: 1, mb: 2 }}>
              
              {/* Timeline Title */}
              <Typography variant="h6" gutterBottom>
                Timeline
              </Typography>

              {/* Total Duration Below Title */}
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "#64748b", textAlign: "right", mb: 1 }}>
                About {suggestions?.duration?.reduce((acc, val) => acc + val, 0) || 0} seconds
              </Typography>

              <Timeline data={suggestions} setHoveredParagraph={setHoveredParagraph} setClickedParagraph={setClickedParagraph} />

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
                  {suggestions.information.map((idx) => idx + 1).join(", ") || "None"}
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



          {/* Version History Panel */}
          {showVersions && (
            <Paper sx={{ p: 2, overflowY: "auto", maxHeight: "200px" }}>
              <Typography variant="h6" gutterBottom>
                Version History
              </Typography>
              {versions.length === 0 ? (
                <Typography variant="body2">No versions saved.</Typography>
              ) : (
                versions.map((ver) => (
                  <Box
                    key={ver.id}
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 1,
                      p: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2">
                      <strong>Date:</strong> {ver.timestamp}
                    </Typography>
                    <Typography variant="body2" noWrap>
                      <strong>Script Preview:</strong> {ver.script}
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ mt: 1 }}
                      onClick={() => handleLoadVersion(ver)}
                    >
                      Load This Version
                    </Button>
                  </Box>
                ))
              )}
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

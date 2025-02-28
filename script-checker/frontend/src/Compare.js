import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Compare() {
  const [reports, setReports] = useState([]);
  const [selectedReports, setSelectedReports] = useState([]);
  const [reportDetails, setReportDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/get_reports");

        if (!response.data || typeof response.data !== "object") {
          console.error("Invalid response format.");
          return;
        }

        // Group reports by directory
        const groupedReports = {};
        Object.entries(response.data).forEach(([directory, files]) => {
          groupedReports[directory] = files.map((file) => ({
            fileName: file,
            analysis_id: file.replace(".json", ""), // Remove .json for display
          }));
        });

        setReports(groupedReports);
      } catch (err) {
        console.error("Error fetching reports:", err);
      }
    };

    fetchReports();
  }, []);



  const handleCheckboxChange = async (directory, fileName) => {
    const analysisId = fileName.replace(".json", ""); // Ensure analysis ID is extracted correctly

    setSelectedReports((prev) => {
      if (prev.includes(analysisId)) {
        const updatedSelection = prev.filter((id) => id !== analysisId);
        const updatedDetails = { ...reportDetails };
        delete updatedDetails[analysisId];
        setReportDetails(updatedDetails);
        return updatedSelection;
      } else if (prev.length < 3) {
        fetchReportDetails(directory, fileName); // Correct function call
        return [...prev, analysisId];
      }
      return prev;
    });
  };


  const fetchReportDetails = async (directory, fileName) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/get_report/${directory}/${fileName}`);
      const analysisId = fileName.replace(".json", ""); // Remove .json for display

      setReportDetails((prev) => ({
        ...prev,
        [analysisId]: response.data, // Store response under the correct ID
      }));
    } catch (err) {
      console.error("Error fetching report details:", err);
    }
  };


  const goToHomepage = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Left Sidebar */}
      <div style={{ width: '20%', borderRight: '1px solid #ddd', padding: '10px', overflowY: 'scroll' }}>
      <button onClick={goToHomepage} className="action-button" style={{ marginBottom: '10px' }}>Back to Homepage</button>
        <h2>Saved Reports</h2>
        <p style={{ color: 'cornflowerblue' }}>Select 2 to 3 reports to compare</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Object.entries(reports).map(([directory, files]) => (
            <li key={directory} style={{ marginBottom: "10px" }}>
              <details>
                <summary><strong>{directory}</strong></summary>
                <ul>
                  {files.map((report) => (
                    <li key={report.fileName} style={{ marginBottom: "5px" }}>
                      <label style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                        <input
                          type="checkbox"
                          onChange={() => handleCheckboxChange(directory, report.fileName)}
                          checked={selectedReports.includes(report.analysis_id)}
                          style={{ marginRight: "5px" }}
                        />
                        <span style={{ marginLeft: "5px" }}>{report.analysis_id}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>

      </div>

      {/* Right Content Section */}
      <div style={{ width: '80%', padding: '10px', overflow: 'hidden' }}>
        <h2>Selected Reports</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          {selectedReports.map((reportId) => (
            <div 
              key={reportId} 
              style={{
                border: '1px solid #ddd',
                flex: 1,
                height: 'calc(100vh - 120px)',
                overflowY: 'scroll',
                padding: '10px',
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              }}
            >
              <h3>Report: {reportId}</h3>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(reportDetails[reportId], null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Compare;

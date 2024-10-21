import React, { useState } from "react";
import JsonFetcher from "./components/JsonFetcher";
import JsonEditor from "./components/JsonEditor";
import RenderJson from "./components/RenderJson";
import "./App.css";

const App = () => {
  const [jsonData, setJsonData] = useState(null);
  const [renderMode, setRenderMode] = useState("html");
  const [status, setStatus] = useState("");

  const handleJsonChange = (newJson) => {
    setJsonData(newJson);
  };

  const handleModeChange = (mode) => {
    setRenderMode(mode);
  };

  const handleStatusChange = (message) => {
    setStatus(message);
  };

  return (
    <div className="app-container">
      <h1>JSON Viewer</h1>
      <div className="status">{status && <p>{status}</p>}</div>
      <div className="main-section">
        <JsonFetcher onJsonFetched={handleJsonChange} onStatusChange={handleStatusChange} />
        <JsonEditor onJsonUpdate={handleJsonChange} onStatusChange={handleStatusChange} />
        <RenderJson jsonData={jsonData} mode={renderMode} onModeChange={handleModeChange} />
      </div>
    </div>
  );
};

export default App;

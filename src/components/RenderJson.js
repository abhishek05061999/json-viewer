import React, { useState } from "react";
import { marked } from "marked";
import { jsonToMarkdown, prettifyJson } from "../utils"; 


const RenderJson = ({ jsonData, mode, onModeChange }) => {
  const handleModeSelect = (e) => {
    onModeChange(e.target.value);
  };

  const renderContent = () => {
    if (!jsonData) return "No JSON data to display.";

    if (mode === "markdown") {
      const markdownText = JSON.stringify(jsonData, null, 2);
      return <div dangerouslySetInnerHTML={{ __html: marked(markdownText) }} />;
    }

    if (mode === "html") {
      return <pre>{JSON.stringify(jsonData, null, 2)}</pre>;
    }

    return null;
  };

  return (
    <div className="render-json">
      <h3>Render JSON as {mode === "html" ? "HTML" : "Markdown"}</h3>
      <select onChange={handleModeSelect}>
        <option value="html">HTML</option>
        <option value="markdown">Markdown</option>
      </select>
      <div className="render-output">{renderContent()}</div>
    </div>
  );
};

export default RenderJson;

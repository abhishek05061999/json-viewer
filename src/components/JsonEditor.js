import React, { useState } from "react";
import { isValidJson } from "../utils";

const JsonEditor = ({ onJsonUpdate, onStatusChange }) => {
  const [jsonInput, setJsonInput] = useState("");

  const handleJsonChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleUpdate = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      onJsonUpdate(parsedJson);
      onStatusChange("JSON updated successfully.");
    } catch (error) {
      onStatusChange("Invalid JSON format.");
    }
  };

  return (
    <div className="json-editor">
      <h3>Manual JSON Input</h3>
      <textarea
        rows="10"
        value={jsonInput}
        onChange={handleJsonChange}
        placeholder="Enter JSON here"
      ></textarea>
      <button onClick={handleUpdate}>Update JSON</button>
    </div>
  );
};

export default JsonEditor;

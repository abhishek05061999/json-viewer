import React, { useState } from "react";
import axios from "axios";

const JsonFetcher = ({ onJsonFetched, onStatusChange }) => {
  const [url, setUrl] = useState("");

  const handleFetch = async () => {
    try {
      const response = await axios.get(url);
      onJsonFetched(response.data);
      onStatusChange("JSON fetched successfully.");
    } catch (error) {
      onStatusChange("Error fetching JSON data.");
    }
  };

  return (
    <div className="json-fetcher">
      <h3>Fetch JSON from API</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter API Endpoint"
      />
      <button onClick={handleFetch}>GET</button>
    </div>
  );
};

export default JsonFetcher;

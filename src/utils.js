// utils.js

// Function to prettify JSON for display in HTML
export const prettifyJson = (jsonData) => {
    try {
      return JSON.stringify(jsonData, null, 2); // 2-space indentation for readability
    } catch (error) {
      return "Invalid JSON data";
    }
  };
  
  // Function to validate if a string is a valid JSON
  export const isValidJson = (jsonString) => {
    try {
      JSON.parse(jsonString); // If it parses without throwing an error, it's valid JSON
      return true;
    } catch (error) {
      return false;
    }
  };
  
  // Function to convert JSON to Markdown (simple implementation)
  export const jsonToMarkdown = (jsonData) => {
    return "```json\n" + prettifyJson(jsonData) + "\n```";
  };
  
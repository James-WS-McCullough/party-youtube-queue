import React, { useState } from "react";
import axios from "axios";

const AddVideo: React.FC = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/queue", { url });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to add video");
    }
  };

  return (
    <div>
      <h1>Add YouTube Video</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
        />
        <button type="submit">Add to Queue</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddVideo;

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoPlayer: React.FC = () => {
  const [queue, setQueue] = useState<string[]>([]);

  useEffect(() => {
    const fetchQueue = async () => {
      const response = await axios.get("/api/queue");
      setQueue(response.data.queue);
    };

    fetchQueue();
    const interval = setInterval(fetchQueue, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Video Queue</h1>
      {queue.length > 0 ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${new URL(
            queue[0]
          ).searchParams.get("v")}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No videos in the queue</p>
      )}
    </div>
  );
};

export default VideoPlayer;

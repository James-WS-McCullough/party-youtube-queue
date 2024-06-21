import type { NextApiRequest, NextApiResponse } from "next";

let videoQueue: string[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { url } = req.body;
    if (url) {
      videoQueue.push(url);
      res.status(200).json({ message: "Video added to the queue" });
    } else {
      res.status(400).json({ message: "Invalid request" });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ queue: videoQueue });
  } else if (req.method === "DELETE") {
    videoQueue = [];
    res.status(200).json({ message: "Queue cleared" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

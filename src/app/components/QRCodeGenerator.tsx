"use client";

import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator: React.FC = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <h2>Scan this QR code to add a video</h2>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeGenerator;

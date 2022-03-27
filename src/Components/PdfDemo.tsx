import React from "react";
import { PDF } from "../assets";
import { Worker, Viewer } from "@react-pdf-viewer/core";

const PdfDemo = () => {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <Viewer fileUrl={PDF} />
      </Worker>
    </div>
  );
};

export default PdfDemo;

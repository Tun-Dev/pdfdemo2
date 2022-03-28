import React from "react";
import logo from "./logo.svg";
import PdfDemo from "./Components/PdfDemo";
import { PDF } from "./assets";
import { Worker } from "@react-pdf-viewer/core";
import SlidePresentationExample from "./Components/SlidePresentationExample";
import "./App.css";

function App() {
  return (
    <>
      <p>
        worked on highlight and get meaning through an api, i'd modify it to a
        modal, just a demo
      </p>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <SlidePresentationExample fileUrl={PDF} />
      </Worker>

      {/* <PdfDemo/> */}
    </>
  );
}

export default App;

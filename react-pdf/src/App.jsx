import { useState } from 'react'
import PDFcomp from './PDFcomp'
import './App.css'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  

  return (
    <>
      <div>
        <PDFcomp />
      </div>
   
    </>
  )
}

export default App

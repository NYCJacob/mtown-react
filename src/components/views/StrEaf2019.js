import React from 'react';
import PDFViewer from '../PDFViewer/PDFViewer'
import PDFJSBackend from '../../api/pdfbackend/pdfjs'

export default function StrEaf2019() {
    return (
        <div className="pdfapp" style={{height: "75vh"}}>
            <div>
                Below is the Environmental Assessment Form filed with Ulster County Planning Board on September 30, 2019.
            </div>
            <PDFViewer backend={PDFJSBackend}
                       src="Marbletown-SEQR-LocalLaw4.pdf"
            />
        </div>
    );
}

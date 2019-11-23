import React from 'react';
import PDFViewer from '../PDFViewer/PDFViewer'
import PDFJSBackend from '../../api/pdfbackend/pdfjs'

export default function StrEaf2019() {
    return (
        <div className="pdfapp" style={{height: "75vh"}}>
            <div>
                Below is reponse from the Ulster County Planning Board review of Marbletown Short Term Rental Law.
            </div>
            <PDFViewer backend={PDFJSBackend}
                       src="UCPB-2019-166.pdf"
            />
        </div>
    );
}

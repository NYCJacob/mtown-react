import React, { Component }from 'react';
import PDFViewer from '../PDFViewer/PDFViewer'
import PDFJSBackend from '../../api/pdfbackend/pdfjs'
import { Typography } from '@smooth-ui/core-sc';


class AccAptUCPB extends Component {
    render() {
        return (
            <div className="pdfapp" style={ {height: "75vh"} }>
                <Typography variant="h5">
                    Below is the recommendation from Ulster County Planning Board regarding the proposed Accessory Apartment Law.
                </Typography>
                <PDFViewer backend={PDFJSBackend}
                           src="UCPL-2019-032.pdf"
                />
            </div>
        );
    }
}

export default AccAptUCPB
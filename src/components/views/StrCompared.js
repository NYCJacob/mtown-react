import React from "react";
import {Component} from "react";
import {Col, Row} from "@smooth-ui/core-sc";
import Table from "../TableGenerator";
import styled from 'styled-components'
import {AgGridReact} from "ag-grid-react";


class StrCompared extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Restrict/Permit", field: "restriction", minWidth: 250, autoHeight: true
            }, {
                headerName: "Woodstock", field: "woodstock", maxWidth:90
            },{
                headerName: "Woodstock Code", field: "woodstockCode"
            },{
                headerName: "Marbletown", field: "marbletown"
            },{
                headerName: "Marbletown Code(proposed)", field: "marbletownCode"
            },{
                headerName: "Rhinebeck", field: "rhinebeck"
            },{
                headerName: "Rhinebeck Code", field: "rhinebeckCode"
            },{
                headerName: "Comments", field: "comments", suppressSizeToFit: true
            }],
            defaultColDef: { resizable: true },
            rowData: [
                {restriction: "annual permit application", woodstock: "Y", woodstockCode: "3-A-1,", marbletown: "Y", marbletownCode: "3-A-1", rhinebeck: "Y", rhinebeckCode: "3", comments: ""},
                {restriction: "str numerical limit", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-A", comments:"Rhinebeck limits to 15 issued by lottery"},
                {restriction: "Neigbor notice", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-A", comments:"Rhinebeck gives notice to lots withing 250 feet"},
                {restriction: "Must preserve residential character", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-B", comments:"" },
                {restriction: "Record rentention", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-G", comments:"Must maintain for three years for CEO inspection"},
                {restriction: "Safety plan", woodstock:"Y", woodstockCode:"3-A-2",  marbletown:"Y", marbletownCode:"3-A-2", rhinebeck:"N", rhinebeckCode:"", comments:"" },
                {restriction: "Parking plan", woodstock:"Y", woodstockCode:"3-A-3",  marbletown:"Y", marbletownCode:"3-A-3", rhinebeck:"Y", rhinebeckCode:"3-H", comments:"Rhinebeck references parking code"  },
                {restriction: "Garbage plan", woodstock:"Y", woodstockCode:"3-A-4",  marbletown:"Y", marbletownCode:"3-A-4", rhinebeck:"", rhinebeckCode:"", comments:""},
                {restriction: "Host and Property Owner responsible for renter",  woodstock:"Y", woodstockCode:"3-A-5",  marbletown:"Y", marbletownCode:"3-A-5", rhinebeck:"", rhinebeckCode:"", comments:"" },
                {restriction: "complaints addressed within 24 hours",  woodstock:"Y", woodstockCode:"3-A-5",  marbletown:"Y", marbletownCode:"3-A-5", rhinebeck:"Y", rhinebeckCode:"3-C", comments:""},
                {restriction: "OCCUPANCY", woodstock:"", woodstockCode:"",  marbletown:"", marbletownCode:"", rhinebeck:"", rhinebeckCode:"", comments:""}
            ]
        }};

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <p>
                        Short term rental laws compared.
                    </p>
                    <div style={{height:'50vh',width: '80vw'}}>
                        <div id="strGrid" style={{height:'100%',width: '100%'}}  className="ag-theme-balham" >
                            <AgGridReact
                                columnDefs={this.state.columnDefs}
                                defaultColDef={this.state.defaultColDef}
                                rowData={this.state.rowData}
                                onGridReady={this.onGridReady}
                                onFirstDataRendered={this.onFirstDataRendered.bind(this)}
                            >
                            </AgGridReact>
                        </div>
                    </div>
                </Col>
            </Row>
        )

    }
}

export default StrCompared;
import React from "react";
import {Component} from "react";
import {Col, Row} from "@smooth-ui/core-sc";
import {AgGridReact} from "ag-grid-react";
import "../../styles/ag-grid-custom.sass"

//   see ag-grid/javascript-grid-column-spanning
//   for col spanning and style customization for comments row
var cellClassRules = {
    "comments-cell": 'data.section === "comments"'
};

function isCommentRow(params) {
    return params.data.section === "comments";
}

class StrCompared extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Restrict/Permit", field: "restriction", minWidth: 200, autoHeight: true,
                colSpan: function (params) {
                    if (isCommentRow(params)){
                        return 7;
                    } else {
                        return 1;
                    }
                },
                cellClassRules: cellClassRules
            }, {
                headerName: "Woodstock", field: "woodstock",

            },{
                headerName: "Code", field: "woodstockCode"
            },{
                headerName: "Marbletown", field: "marbletown"
            },{
                headerName: "Code(proposed)", field: "marbletownCode"
            },{
                headerName: "Rhinebeck", field: "rhinebeck"
            },{
                headerName: "Rhinebeck Code", field: "rhinebeckCode"
            },
            //     {
            //     headerName: "Comments", field: "comments", suppressSizeToFit: false
            // }
            ],
            defaultColDef: { resizable: true },
            rowData: [
                {restriction: "annual application", woodstock: "Y", woodstockCode: "3-A-1,", marbletown: "Y", marbletownCode: "3-A-1", rhinebeck: "Y", rhinebeckCode: "3", comments: ""},
                {restriction: "str numerical limit", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-A"},
                {section: "comments",
                    restriction: "Notes: Rhinebeck limits to 15 issued by lottery",
                },
                {restriction: "non owner occupied allowed", woodstock:"Y*", woodstockCode:"",  marbletown:"Y", marbletownCode:"", rhinebeck:"N", rhinebeckCode:""},
                {section: "comments",
                    restriction: "Woodstock limits days allowed to rent and requires special permit, Rhinebeck prohibits",
                },
                {restriction: "corp owners allowed", woodstock:"Y*", woodstockCode:"3-E",  marbletown:"Y", marbletownCode:"", rhinebeck:"N", rhinebeckCode:""},
                {section: "comments",
                    restriction: "Woodstock states \'Registration by a coporation whose owners have an interest in more than one STR is prohibited in residential districts.\'",
                },
                {restriction: "Neighbor notice", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-A"},
                {section: "comments",
                    restriction: "Notes: Rhinebeck gives notice to lots withing 250 feet",
                },
                {restriction: "Proximity restriction", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-A"},
                {section: "comments",
                    restriction: "Notes: Rhinebeck prohibits within two lots of another rental",
                },
                {restriction: "preserve residential character", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-B", comments:"" },
                {restriction: "Record rentention", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-G"},
                {section: "comments",
                    restriction: "Rhinebeck: Must maintain records for three years for CEO inspection",
                },
                {restriction: "Safety plan", woodstock:"Y", woodstockCode:"3-A-2",  marbletown:"Y", marbletownCode:"3-A-2", rhinebeck:"N", rhinebeckCode:"", comments:"" },
                {restriction: "Parking plan", woodstock:"Y", woodstockCode:"3-A-3",  marbletown:"Y", marbletownCode:"3-A-3", rhinebeck:"Y", rhinebeckCode:"3-H" },
                {section: "comments",
                    restriction: "Rhinebeck references parking code",
                },
                {restriction: "Garbage plan", woodstock:"Y", woodstockCode:"3-A-4",  marbletown:"Y", marbletownCode:"3-A-4", rhinebeck:"", rhinebeckCode:"", comments:""},
                {restriction: "Host/Property Owner responsible",  woodstock:"Y", woodstockCode:"3-A-5",  marbletown:"Y", marbletownCode:"3-A-5", rhinebeck:"", rhinebeckCode:"", comments:"" },
                {restriction: "complaints addressed",  woodstock:"Y", woodstockCode:"3-A-5",  marbletown:"Y", marbletownCode:"3-A-5", rhinebeck:"Y", rhinebeckCode:"3-C", comments:""},
                {restriction: "fines", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-M"},
                {section: "comments",
                    restriction: "Rhinebeck fines $1,000 for first violation and revokes permit on second",
                },
                {restriction: "OCCUPANCY", woodstock:"", woodstockCode:"",  marbletown:"", marbletownCode:"", rhinebeck:"", rhinebeckCode:"", comments:""},
                {restriction: "2 guest/bedroom*", woodstock:"Y", woodstockCode:"3-A-6",  marbletown:"Y", marbletownCode:"3-A-6", rhinebeck:"N", rhinebeckCode:""},
                {section: "comments",
                    restriction: "12 and under not considered guests, therefore unlimited number of children",
                },
                {restriction: "max occ based on septic*", woodstock:"N", woodstockCode:"",  marbletown:"Y", marbletownCode:"3-A-6", rhinebeck:"", rhinebeckCode:""},
                {section: "comments",
                    restriction: "no way to prove septic capacity in older buidlings pre Dept of Health, no requirement that STR provide proof of septic",
                },
                {restriction: "total occupancy limit", woodstock:"N", woodstockCode:"",  marbletown:"Y*", marbletownCode:"3-E", rhinebeck:"Y*", rhinebeckCode:""},
                {section: "comments",
                    restriction: "*Marbletown:2 per bedroom=  10, Rhinebeck 6 total",
                },
                {restriction: "accessory building restiction", woodstock:"N", woodstockCode:"",  marbletown:"N", marbletownCode:"", rhinebeck:"Y", rhinebeckCode:"3-E"},
                {section: "comments",
                    restriction: "Rhinebeck requires acc building shall have sanitary facilities",
                }
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

                    <div style={{height:'75vh',width: '75vw'}}>
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
import React, { Component }from 'react';
import PDFViewer from '../PDFViewer/PDFViewer';
import PDFJSBackend from '../../api/pdfbackend/pdfjs';
import { Typography } from '@smooth-ui/core-sc';
import { Col, Row, Button} from '@smooth-ui/core-sc';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class RescueSquad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rescueContent: 0,
            columnDefs: [{
                headerName: "Town", field: "town"
            }, {
                headerName: "Year", field: "year"
            },{
                headerName: "Total Revenue", field: "revenue"
            },{
                headerName: "Govt Support", field: "govt"
            },{
                headerName: "Staff", field: "employees"
            },{
                headerName: "Volunteers", field: "volunteers"
            },{
                headerName: "Salaries", field: "salaries"
            }],
            defaultColDef: { resizable: true },
            rowData: [
                {town: 'Olive', year: '2015', revenue: '152,152', govt: '98,000', employees: '0', volunteers: '40', salaries: "0"},
                {town: 'Olive', year: '2016', revenue: '260,712', govt: '163,833', employees: '38',volunteers: '40', salaries: "148,341"},
                {town: 'Olive', year: '2017', revenue: '410,058', govt: '258,000', employees: '36', volunteers: '0',salaries: "267,442"},
                {town: 'Marbletown', year: '2015', revenue: '255,513', govt: '42,500', employees: '0', volunteers: '25', salaries: "0"},
                {town: 'Marbletown', year: '2016', revenue: '277,723', govt: '42,500', employees: '0', volunteers: '25', salaries: "0"},
                {town: 'Marbletown', year: '2017', revenue: '269,374', govt: '43,300', employees: '0', volunteers: '25', salaries: "0"},
                {town: 'New Paltz', year: '2015', revenue: '870,536', govt: '0 *', employees: '20',volunteers: '50', salaries: "564,890"},
                {town: 'New Paltz', year: '2016', revenue: '1,079,033', govt: '0 *', employees: '24', volunteers: '50', salaries: "629,029"}
            ]
        };
        this.nextScreen = this.nextScreen.bind(this);
        this.backScreen = this.backScreen.bind(this);
        this.introScreen = this.introScreen.bind(this);
    }

    nextScreen() {
        let nextPage = this.state.rescueContent + 1;
        this.setState(state => ({
            rescueContent: nextPage
        }))
    }

    backScreen() {
        let backPage = this.state.rescueContent - 1;
        this.setState(state => ({
            rescueContent: backPage
        }))
    }

    introScreen() {
        this.setState(state => ({
            rescueContent: 0
        }))
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        };

    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }

    render() {
        return (
            <div>
                { this.state.rescueContent === 0 &&
                    <Row>
                        <Col>
                            <Typography variant="h2">
                                Marbletown Rescue Squad 2019 Budget Crisis
                            </Typography>
                            <Typography>
                                In the Fall of 2018, when the Town Board passed the fiscal 2019 budget, no one noticed, that the town made
                                a 50% reduction for the Marbletown First Aid Unit ("MFAU").  For many years MFAU received $40,000 annually from
                                Marbletown.  At some point during Mike Warren's tenure the amount was raised to $40,800.  However, Marbletown
                                fiscal 2019 budget line for MFAU is $20,000.
                            </Typography>
                            <p>
                                The question is why?
                            </p>
                            <p>
                                The issue became public when members of MFAU attended a Febuary town board meeting demanding that
                                the funding be restored.  It turns out the Town Supervisor is seeking to convert MFAU from an all volunteer
                                unit to a paid unit.  It seems the Supervisor is looking at what  happen the ambulance unit in the Town of Olive
                            </p>
                            <p>
                                The Town of Olive switch a contract with Olive First Aid Unit ("OFAU") for ambulance service for the town.
                                Olive paid OFAU $258,000 in 2017 for 24/7 ambulance service.  OFAU also is given "revenue recovery" rights enabling them
                                to also keep revenue from billing for their services- most, if not all, such revenue would come from insurance
                                payments.
                            </p>
                            <Button onClick={this.nextScreen}>
                                <span>
                                Next: Key data for the ambulance services in Olive, New Paltz, and Marbletown.
                                </span>
                                <i className="far fa-arrow-right" style={{color: "orange", fontSize: "1em", paddingLeft: "0.5em" }}></i>
                            </Button>

                        </Col>
                    </Row>
                }
                {this.state.rescueContent === 1 &&
                    <div>
                        <Row>
                            <Col >
                                <p>
                                Here is a breakdown of relevant data based on recent tax filings.  This information is public information and made available by
                                Propublica (www.propublica.org) which is an awesome organization.
                                </p>
                                {/*<ReactTable*/}
                                {/*columns={tableColumns} data={tableData} defaultPageSize={8} showPagination={false}*/}
                                {/*/>*/}
                                <div style={{height:'50vh',width: '80vw'}}>
                                    <div id="myGrid" style={{height:'100%',width: '100%'}}  className="ag-theme-balham" >
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

                                <sub><strong>*New Paltz states all revenue as other rather than listing any revenue for government grants.  It is unclear how much is from New Platz.  </strong> </sub>
                            </Col>
                        </Row>
                        <Row  >
                            <Col style={ {display: "flex"} }>
                                <Button onClick={this.backScreen} style={ {flex: "1"} }  >
                                    <i className="far fa-arrow-left" style={{color: "orange", fontSize: "1em", paddingLeft: "0.5em" }}></i>
                                    <span style={ { paddingLeft: "0.5em" } }>Back to Intro</span>
                                </Button>
                            </Col>
                            <Col style={ {display: "flex"} }>
                                <Button onClick={this.nextScreen} style={ {flex: "1"} } >
                                    <span>Next: First Aid Unit Presentation</span>
                                    <i className="far fa-arrow-right" style={{color: "orange", fontSize: "1em", paddingLeft: "0.5em" }}></i>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                }
                {this.state.rescueContent === 2 &&
                    <div>
                        <div className="pdfapp" style={ {height: "80vh"} }>
                            <PDFViewer backend={PDFJSBackend}
                            src="2019_MFAU_presentation .pdf"
                            />
                        </div>
                        <Row  >
                            <Col style={ {display: "flex"} }>
                                <Button onClick={this.backScreen} style={ {flex: "1"} }  >
                                    <i className="far fa-arrow-left" style={{color: "orange", fontSize: "1em", paddingLeft: "0.5em" }}></i>
                                    <span style={ { paddingLeft: "0.5em" } }>Back to data table</span>
                                </Button>
                            </Col>
                            <Col style={ {display: "flex"} }>
                                <Button onClick={this.introScreen} style={ {flex: "1"} } >
                                    <span>Back to intro</span>
                                    <i className="far fa-arrow-right" style={{color: "orange", fontSize: "1em", paddingLeft: "0.5em" }}></i>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                }

            </div>
        );
    }

}

export default RescueSquad
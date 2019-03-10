import React, { Component }from 'react';
import PDFViewer from '../PDFViewer/PDFViewer';
import PDFJSBackend from '../../api/pdfbackend/pdfjs';
import { Typography } from '@smooth-ui/core-sc';
import { Col, Row, Button} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import ReactTable from "react-table";
import "react-table/react-table.css";

class RescueSquad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rescueContent: 0
        };
        this.nextScreen = this.nextScreen.bind(this);
        this.backScreen = this.backScreen.bind(this);
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

    render() {
        // react-table data
        const tableColumns = [{
            Header: 'Town',
            accessor: 'town'
        },{
            Header: 'Year',
            accessor: 'year'
        },{
            Header: 'Total Revenue',
            accessor: 'revenue'
        },{
            Header: 'Gov\'t Support',
            accessor: 'govt'
        },{
            Header: 'Staff',
            accessor: 'employees'
        },{
            Header: 'Volunteers',
            accessor: 'volunteers'
        },{
            Header: 'Salaries',
            accessor: 'salaries'
        }];

        const tableData = [
            {town: 'Olive', year: '2015', revenue: '152,152', govt: '98,000', employees: '0', volunteers: '40', salaries: "0"},
            {town: 'Olive', year: '2016', revenue: '260,712', govt: '163,833', employees: '38',volunteers: '40', salaries: "148,341"},
            {town: 'Olive', year: '2017', revenue: '410,058', govt: '258,000', employees: '36', volunteers: '0',salaries: "267,442"},
            {town: 'Marbletown', year: '2015', revenue: '255,513', govt: '42,500', employees: '0', volunteers: '25', salaries: "0"},
            {town: 'Marbletown', year: '2016', revenue: '277,723', govt: '42,500', employees: '0', volunteers: '25', salaries: "0"},
            {town: 'Marbletown', year: '2017', revenue: '269,374', govt: '43,300', employees: '0', volunteers: '25', salaries: "0"},
            {town: 'New Paltz', year: '2015', revenue: '870,536', govt: '0 *', employees: '20',volunteers: '50', salaries: "564,890"},
            {town: 'New Paltz', year: '2016', revenue: '1,079,033', govt: '0 *', employees: '24', volunteers: '50', salaries: "629,029"}
        ];

        return (
            <div className="pdfapp" style={ {height: "75vh"} }>
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
                                Next: Key data for the ambulance services in Olive, New Palz, and Marbletown in one table.
                            </Button>

                        </Col>
                    </Row>
                }
                {this.state.rescueContent === 1 &&
                    <div>
                        <Row>
                            <Col>
                                <p>
                                Here is a breakdown of relevant data based on recent tax filings.  This information is public information and made available by
                                Propublica (www.propublica.org) which is an awesome organization.
                                </p>
                                <ReactTable
                                columns={tableColumns} data={tableData} defaultPageSize={8} showPagination={false}
                                />
                                <sub><strong>*New Paltz states all revenue as other rather than listing any revenue for government grants.  It is unclear how much is from New Platz.  </strong> </sub>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.backScreen}>Back to Intro on Marbletown First Aid Unit Budget</Button>
                            </Col>
                            <Col>
                                <Button onClick={this.nextScreen}>Next: Presentation by Marbletown First Aid Unit ("MFAU") </Button>
                            </Col>
                        </Row>
                    </div>
                }
                {this.state.rescueContent === 2 &&
                <div className="pdfapp" style={ {height: "75vh"} }>
                            <PDFViewer backend={PDFJSBackend}
                            src="2019_MFAU_presentation .pdf"
                            />
                    </div>
                }

            </div>
        );
    }

}

export default RescueSquad
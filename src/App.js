import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Helmet} from "react-helmet";
import { globalStyle, createGlobalStyle, styled, up, css, Grid, Col, Row } from '@smooth-ui/core-sc';
import Header from "./components/Header";
import OverlayHamburger from "./components/OverlayHamburger";
import ZoningMap from "./components/views/ZoningMap";
import TownBoard from "./components/views/TownBoard";
import RescueSquad from "./components/views/RescueSquad";
import CensusView from "./components/views/CensusView";
import EventLaw from "./components/views/EventLaw";
import Petition from "./components/views/Petition";
import AccAptStatus from "./components/views/AccAptStatus";
import Contact from "./components/views/Contact";
import SevReport from "./components/views/SevReport"
import Homepage from "./components/views/Homepage"
import AccAptUCPB from "./components/views/AccAptUCPB";
import STRLaw from "./components/views/STRLaw";
import Archive from "./components/views/Archive";
import StrEaf from "./components/views/StrEaf";

const NoMatch = () => <div><h3>This is not the page you were looking for.</h3></div>

const StyledHamburgerCol = styled(Col)`
  ${up('sm', css`
  display: none;
`)}
`;

class App extends Component {
  render() {
    return (
        <BrowserRouter>
                    <Grid style={ {
                        border: "1px solid grey",
                        boxShadow: "0 2px 7px #000"
                    } }>
                        <Row ml={0}>
                            <Col xs={8} sm={12} md={12}>
                                <Header/>
                            </Col>
                            <StyledHamburgerCol xs={2} >
                                <OverlayHamburger/>
                            </StyledHamburgerCol>
                        </Row>


                            <Helmet>
                                <title>MarbletownInfo: local politics of Marbletown NY</title>
                            </Helmet>
                            <Switch>
                                <Route exact path="/sev" component={SevReport}/>
                                <Route path="/census" component={CensusView}/>
                                <Route path="/townboard/voting" component={TownBoard}/>
                                <Route path="/townboard/rescuesquad" component={RescueSquad}/>
                                <Route path="/proposedlaws/events" component={EventLaw}/>
                                <Route path="/proposedlaws/archive" component={Archive}/>
                                <Route path="/petition" component={Petition}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/proposedlaws/archive/accaptsup" component={AccAptStatus}/>
                                <Route exact path="/proposedlaws/accapt/ucpb-recommendations" component={AccAptUCPB} />
                                <Route  path="/proposedlaws/str/" component={STRLaw}/>
                                {/*<Route path="/proposedlaws/str/str-environmental-assessment-form" component={StrEaf}/>*/}
                                <Route exact path="/zoning" component={ZoningMap}/>
                                <Route exact path="/" component={Homepage}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        <Row style={ {marginTop: "1.5rem"} }>
                            <Col textAlign="center" fontSize={{xs: "0.5em",md: "0.7em"}}>
                                <footer>
                                    &#169; 2018-2019 FutureSense LLC
                                </footer>
                            </Col>
                        </Row>
                    </Grid>
        </BrowserRouter>
    );
  }
}

export default App;

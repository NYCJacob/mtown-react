import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";
import styled from '@emotion/styled';
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
import MarbletownBudget2020 from "./components/views/MarbletownBudget2020"
// Fontawesome setup for components
//  see https://stackoverflow.com/questions/49319363/how-to-integrate-fontawesome-5-pro-with-react
//
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
library.add(fad)

const NoMatch = () => <div><h3>This is not the page you were looking for.</h3></div>

const StyledHamburgerCol = styled(Col)`
  ${up('sm', css`
  display: none;
`)}
`;

const StyledAppGridContainer = styled.div`
  min-height: 99vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: 
    "header"
    "main"
    "footer";
  border: 1px solid grey;
  boxShadow: 0 2px 7px #000;
  maxWidth: 90vw;
  rowGap: 0.01em;
`

const StyledHeaderArea = styled.div`
  grid-area: header;
`
const StyledFooterArea = styled.footer`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.5em;
  align-self: end;
`

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Helmet>
                <title>MarbletownInfo: local politics of Marbletown NY</title>
            </Helmet>
                    <StyledAppGridContainer>
                        <StyledHeaderArea>
                            <Header/>
                        </StyledHeaderArea>

                        <Switch>
                                <Route exact path="/sev" component={SevReport}/>
                                <Route path="/census" component={CensusView}/>
                                <Route path="/townboard/voting" component={TownBoard}/>
                                <Route path="/townboard/budget2020" component={MarbletownBudget2020}/>
                                <Route path="/townboard/rescuesquad" component={RescueSquad}/>
                                <Route path="/proposedlaws/events" component={EventLaw}/>
                                <Route path="/proposedlaws/archive" component={Archive}/>
                                <Route path="/petition" component={Petition}/>
                                <Route path="/contact" component={Contact}/>
                                <Route exact path="/proposedlaws/archive/accaptsup" component={AccAptStatus}/>
                                <Route exact path="/proposedlaws/archive/accapt/ucpb-recommendations" component={AccAptUCPB} />
                                <Route  path="/proposedlaws/str/" component={STRLaw}/>
                                {/*<Route path="/proposedlaws/str/str-environmental-assessment-form" component={StrEaf}/>*/}
                                <Route exact path="/zoning" component={ZoningMap}/>
                                <Route exact path="/" component={Homepage}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        <StyledFooterArea>
                            &#169; 2018-2020 FutureSense LLC
                        </StyledFooterArea>
                    </StyledAppGridContainer>
        </BrowserRouter>
    );
  }
}

export default App;

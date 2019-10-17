import React from 'react'
import styled from "styled-components";
import { Col, Row } from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {Route} from "react-router-dom";

import Str2019Sept from  "./Str2019Sept";
import StrEaf2019 from "./StrEaf2019";
import StrCompared from "./StrCompared";

const  StyledSTRLaw = styled.section`
  //margin: 0 auto;
`

class STRLaw extends React.Component {

    render() {
        return (
            <StyledSTRLaw>
                    <Row>
                        <Col xs={12}>
                            <SubTabNav
                                tabConfig = {[
                                    {"route": "/proposedlaws/str/str-2019sept",
                                        "tabText": "Proposed STR Law of 2019"},
                                    {"route": "/proposedlaws/str/str-environmental-assessment-form",
                                        "tabText": "Environmental Assessment Form"},
                                    {"route": "/proposedlaws/str/str-laws-compared",
                                        "tabText": "STR law compared"},
                                ]}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Route
                                exact path="/proposedlaws/str/str-2019sept"
                                component={Str2019Sept}
                            />
                            <Route
                                exact path="/proposedlaws/str/str-environmental-assessment-form"
                                component={StrEaf2019}
                            />
                            <Route
                                exact path="/proposedlaws/str/str-laws-compared"
                                component={StrCompared}
                            />

                        </Col>
                    </Row>



            </StyledSTRLaw>
        );
    }
}

export default STRLaw;

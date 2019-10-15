import React from "react";
import {Component} from "react";
import { Grid, Col, Row, Typography} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {Route, Switch, NavLink} from "react-router-dom";
import {useRouteMatch, useParams} from "react-router"
import Dec2018LL2DraftLaw from "./Dec2018LL2DraftLaw"
import Nov2018LLTwo from "./Nov2018LLTwoproposed"
import NovLL2Markup from "./NovLL2Markup"
import Dec4LL2Markup from "./Dec4LL2Markup"
import AccApt201901 from "./AccApt201901"
import AccAptUCPB from "./AccAptUCPB"
import {Dec4LL2Html} from "./Dec4LL2Html";
import NestingExample from "./Topics";

function AccAptStatus () {

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Typography variant="h2">2018 - 2019 Zoning Law Revisions</Typography>
                        <Typography lineHeight={1.2}>On November 20, 2018 the Marbletown Town Board introduced <strong>Local
                            Law 2 titled "A Local Law for 2018 to
                            the Town of Marbletown Zoning Law".</strong> This law proposes sweeping changes to the
                            zoning code including the following: Agriculture,
                            Accessory Apartments, Accessory Uses, Design Guidelines, Timing of Appeals, and Food
                            Services and Drinking Places.</Typography><br/><br/>
                        <Typography lineHeight={1.2}>On December 4, 2018 the Marbletown Town Board introduced <strong>Local
                            Law 2018 #2 Accessory Apartments. </strong>
                            This only included the accessory apartments section from the first Local Law #2.
                        </Typography><br/><br/>
                        <Typography lineHeight={1.2}>
                            On January 8, 2019 the Marbletown Town Board introduced <strong>2019 Accessory Apartment Law.</strong>
                            This law seems to be a new draft of the Local Law 2018 #2 Accessory Apartment law.
                        </Typography>
                        <hr/>
                    </Col>
                    <Col xs={12}>
                        <SubTabNav
                            tabConfig = {[
                                {"route": "/proposedlaws/archive/accaptsup",
                                    "tabText": "January 2019 Draft Law"},
                                {"route": "/proposedlaws/archive/accaptsup/2018dec",
                                    "tabText": "Dec 4 Draft"},
                                {"route": "/proposedlaws/archive/accaptsup/2018decMarkup",
                                    "tabText": "Dec 4 - Current Law Markup"},
                                {"route": "/proposedlaws/archive/accaptsup/2018november",
                                    "tabText": "Nov 20 Draft"},
                                {"route": "/proposedlaws/archive/accaptsup/2018november/markup",
                                    "tabText": "Nov 20 v Current Law"},
                                {"route": "/proposedlaws/archive/accapt/ucpb-recommendations",
                                    "tabText": "UCPB Response"}
                            ]}
                        />
                    </Col>

                    <Col>
                        <NavLink to="/proposedlaws/archive/accaptsup">Accaptsup</NavLink>
                        <NavLink to="/proposedlaws/archive/accaptsup/ucpb-recommendations">ucpb-recommendations</NavLink>
                        <NavLink to="/proposedlaws/archive/accaptsup/2018dec">2018dec</NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                            <Route
                                exact path="/proposedlaws/archive/accaptsup"
                                component={AccApt201901}
                            />
                            <Route
                                exact path="/proposedlaws/archive/accaptsup/ucpb-recommendations"
                                component={AccAptUCPB}
                            />
                            <Route
                                exact path="/proposedlaws/archive/accaptsup/2018dec"
                                component={Dec2018LL2DraftLaw}
                            />
                            <Route
                                exact path="/proposedlaws/archive/accaptsup/2018decMarkup"
                                component={Dec4LL2Markup}
                            />
                            <Route
                                exact path="/proposedlaws/archive/accaptsup/2018november"
                                component={Nov2018LLTwo}
                            />
                            <Route
                                exact path="/proposedlaws/archive/accaptsup/2018november/markup"
                                component={NovLL2Markup}
                            />

                        </Switch>
                    </Col>
                </Row>
            </Grid>
        )
}

export default AccAptStatus

import React from "react";
import SubTabNav from "../SubTabNav";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dec2018LL2DraftLaw from "./Dec2018LL2DraftLaw"
import Nov2018LLTwo from "./Nov2018LLTwoproposed"
import NovLL2Markup from "./NovLL2Markup"
import Dec4LL2Markup from "./Dec4LL2Markup"
import AccApt201901 from "./AccApt201901"
import AccAptUCPB from "./AccAptUCPB"


export default function NestingExample() {
    return (
        <Router>
            <div>
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

                <hr />

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
            </div>
        </Router>
    );
}



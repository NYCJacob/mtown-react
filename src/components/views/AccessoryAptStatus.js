import React from "react";
import {Component} from "react";
import { Grid, Col, Row, Typography} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Dec2018LL2DraftLaw from "./Dec2018LL2DraftLaw"
import Nov2018LLTwo from "./Nov2018LLTwoproposed"
import NovLL2Markup from "./NovLL2Markup"
import Dec4LL2Markup from "./Dec4LL2Markup"
import AccApt201901 from "./AccApt201901"
import AccAptUCPB from "./AccAptUCPB"
import {Dec4LL2Html} from "./Dec4LL2Html";


export default function NestingExample() {
    return (
        <Router>
            <div>
                <SubTabNav
                    tabConfig = {[
                        {"route": "/proposedlaws/archive/topics",
                            "tabText": "Topics"},
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

                    <Route path="/proposedlaws/archive/topics">
                        <Topics />
                    </Route>
                    <Route
                        exact path="/proposedlaws/archive/accaptsup"
                        component={AccApt201901}
                    />
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}

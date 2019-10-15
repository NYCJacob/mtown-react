import React, { Component } from "react";
import {NavLink, Route} from 'react-router-dom'

import styled from "styled-components";
import AccAptStatus from "./AccAptStatus";
import AccessoryAptStatus from "./AccessoryAptStatus";


const StyledTownBoard = styled.section`
  ul {
    list-style: none;
  }
  
`;

class Archive extends Component {
    render() {
        return (
            <StyledTownBoard>
                <h2>
                    <NavLink to="/proposedlaws/archive">
                    Archived Proposals
                    </NavLink>
                </h2>
                <ul>
                    <li><NavLink to="/proposedlaws/archive/accaptsup">
                        2019 Accessory Apartment Law
                    </NavLink></li>
                </ul>
                <div>
                    <Route
                        exact path="/proposedlaws/archive/accaptsup"
                        component={AccessoryAptStatus}
                    />

                </div>

            </StyledTownBoard>
        )
    }
};


export default Archive;
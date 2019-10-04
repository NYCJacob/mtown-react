import React, { Component } from "react";
import {NavLink, Route} from 'react-router-dom'

import styled from "styled-components";
import AccAptStatus from "./AccAptStatus";


const StyledTownBoard = styled.section`
  ul {
    list-style: none;
  }
  
`;


class Archive extends Component {
    render() {
        return (
            <StyledTownBoard>
                <h2>Archived Proposals</h2>
                <ul>
                    <li><NavLink to="/proposedlaws/archive/accaptsup">
                        2019 Accessory Apartment Law
                    </NavLink></li>
                </ul>
                <div>
                    <Route
                        exact path="/proposedlaws/archive/accaptsup"
                        component={AccAptStatus}
                    />
                </div>

            </StyledTownBoard>
        )
    }
};


export default Archive;
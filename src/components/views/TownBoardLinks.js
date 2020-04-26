import React from 'react';
import {NavLink} from "react-router-dom";
import styled from '@emotion/styled';

const homeSubMenuList = styled.ul`
a {
  text-decoration: underline;
}
`

const TownBoardLinks = () => (
    <div className="proposed-laws">
        <homeSubMenuList>
            <li>
                <NavLink exact to="/townboard/voting" >
                    Town Board Voting Record
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/townboard/rescuesquad">
                    Ambulance Squad Budget
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/townboard/budget2020">
                    Marbletown 2020 Budget
                </NavLink>
            </li>
        </homeSubMenuList>
    </div>
);

export default TownBoardLinks;
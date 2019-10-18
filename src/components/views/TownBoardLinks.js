import React from 'react';
import {NavLink} from "react-router-dom";

const TownBoardLinks = () => (
    <div className="proposed-laws">
        <ul className="subDropDown" >
            <li style={ {paddingBottom: "0.5rem"}}>
                <NavLink exact to="/townboard/voting" >
                    Town Board Voting Record
                </NavLink>
            </li>
            <hr />
            <li>
                <NavLink exact to="/townboard/rescuesquad">
                    Ambulance Squad Budget
                </NavLink>
            </li>
            <hr />
            <li>
                <NavLink exact to="/townboard/budget2020">
                    Marbletown 2020 Budget
                </NavLink>
            </li>
        </ul>
    </div>
);

export default TownBoardLinks;
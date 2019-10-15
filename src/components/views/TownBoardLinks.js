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
                2020 Budget (coming soon)
            </li>
        </ul>
    </div>
);

export default TownBoardLinks;
import React from 'react';
import {NavLink} from "react-router-dom";

const LawLinks = () => (
    <div className="proposed-laws">
            <ul className="subDropDown" >
                    <li style={ {paddingBottom: "0.5rem"}}>
                            <NavLink to="/proposedlaws/str/str-2019sept" >
                                    Short Term Rental Law
                            </NavLink>
                    </li>
                    <li style={ {paddingBottom: "0.5rem"}}>
                            <NavLink to="/proposedlaws/events" >
                                    Event Law
                            </NavLink>
                    </li>

                    <hr></hr>
                    <li>
                            <NavLink to="/proposedlaws/archive">
                                    Archived Proposals
                            </NavLink>
                            {/*<NavLink to="/proposedlaws/accaptsup">*/}
                            {/*        Accessory Apartment*/}
                            {/*</NavLink>*/}
                    </li>
            </ul>
    </div>
);

export default LawLinks;
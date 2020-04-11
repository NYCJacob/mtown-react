import React, { Component } from "react";

import styled from '@emotion/styled';

import { tboard2018, tboard2019 } from "../../api/townboardapi";
// import Accordion from "../reactrespaccordion/Accordion";
// import "../../styles/responsAccord.css";
import {  Accordion,  AccordionItem,  AccordionButton,  AccordionPanel,} from "@reach/accordion";
import "@reach/accordion/styles.css";

const StyledTownBoard = styled.section`
  td {
    font-size: .6em;
  }
  h5{
    margin-bottom: .5em;
    margin-top: .5em;
  }
  h6{
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const monthsArr =
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const yearsAvailable = [
    { "year": "2018", "townboardMembers": [ "Rich Parete (Supv)", "Tim Sweeney", "Joe Borzumato", "Eric Stewart", "Don LaFera" ] },
    { "year": "2019", "townboardMembers": [ "Rich Parete (Supv)", "Tim Sweeney", "Joe Borzumato", "Eric Stewart", "Don LaFera" ] }
    ];

const yearsAccordionGenerator = (years) =>{
    return(
        years.map((yearData, index) => {
            let { year, townboardMembers } = yearData;
            return(
                <Accordion key={`key${index}`} collapsible>
                    <AccordionItem>
                        <h3>
                            <AccordionButton>
                                <h1>
                                    {year}:{townboardMembers}
                                </h1>
                            </AccordionButton>
                            <AccordionPanel>
                                {accordGenerator(year)}
                            </AccordionPanel>
                        </h3>
                    </AccordionItem>
                </Accordion>
            )
            }
        )
    )
}

const monthAccordionGenerator = (month) => {
    return(
        month.map(( meeting, index ) => {
            let date = new Date(meeting.date);
            let day = date.getDate();
            let month = monthsArr[date.getMonth()];
            let year = date.getFullYear();

            return (
                <div key={`key${index}`}>
                    <h5>{`Meeting Date: ${month} ${day}, ${year}`}</h5>
                    <h6>Present: {meeting.present}</h6>
                    <table>
                        <tbody>
                        <tr><th style={{width:"90vw", textAlign: "center"}}>Resolution</th><th style={{width:"10vw", textAlign: "center"}}>Voting</th></tr>
                        {meeting.resolutions.map( (resolution, index) => {
                                return (
                                    <tr key={`key${index}`}><td>{resolution.title}</td><td>{resolution.voting}</td></tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            )
        })
    )
}

const accordGenerator = (year) => {
    let yearData;
    if (year === "2018"){
        yearData = tboard2018;
    }
    else {
        yearData = tboard2019;
    }
    return(
        yearData.map((month, index) => {
            return (
                <div  key={`key${index}`}>
                    <Accordion collapsible>
                        <AccordionItem>
                            <h3>
                                <AccordionButton>
                                    {monthsArr[index]}
                                </AccordionButton>
                                <AccordionPanel>
                                    {monthAccordionGenerator(month)}
                                </AccordionPanel>
                            </h3>
                        </AccordionItem>
                    </Accordion>
                </div>
            )
        }
        ))};

class TownBoard extends Component {
    render() {
        return (
            <StyledTownBoard>
                <h2>Town Board Votes</h2>
                <Accordion>
                    {yearsAccordionGenerator(yearsAvailable)}
                </Accordion>
            </StyledTownBoard>
        )
    }
};


export default TownBoard;
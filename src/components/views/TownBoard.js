import React, { useState } from "react";

import styled from '@emotion/styled';

import { tboard2018, tboard2019 } from "../../api/townboardapi";
import "../../styles/responsAccord.css";
import {  Accordion,  AccordionItem,  AccordionButton,  AccordionPanel,} from "@reach/accordion";
import "@reach/accordion/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

const StyledReachAccordion = styled(Accordion)`    
    [data-reach-accordion-button] {
      background-color: #ffad2c;
      border: 2px solid darkorange;
    }

`

const monthsArr =
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const yearsAvailable = [
    { "year": "2018", "townboardMembers": [ "Rich Parete (Supv)", "Tim Sweeney", "Joe Borzumato", "Eric Stewart", "Don LaFera" ] },
    { "year": "2019", "townboardMembers": [ "Rich Parete (Supv)", "Tim Sweeney", "Joe Borzumato", "Eric Stewart", "Don LaFera" ] }
    ];

function YearsAccordionGenerator(years) {
    // need to declare rotate value for each year accordion to avoid syncing all caret rotation value
    const [yearRotation, setYearRotation] = useState(270)

    return(
        years.map((yearData,index) => {
            let { year, townboardMembers } = yearData;
            const faYearRotation = () => {
                if (yearRotation === 270) {
                    setYearRotation(0)
                } else {
                    setYearRotation(270)
                }
            };

            return(
                <StyledReachAccordion key={`key${index}`} collapsible onChange={ faYearRotation  }>
                    <AccordionItem>
                        <h3>
                            <AccordionButton>
                                <FontAwesomeIcon icon={['fad', 'caret-circle-down']} transform={{ rotate: yearRotation  }} pull= "left" size= "lg" />
                                {year}
                                <hr/>
                                <span>Town Board Members: {townboardMembers}</span>
                            </AccordionButton>
                            <AccordionPanel>
                                {AccordGenerator(year)}
                            </AccordionPanel>
                        </h3>
                    </AccordionItem>
                </StyledReachAccordion>
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

function AccordGenerator(year) {
    // Declare state for arrow rotation value
    const [rotation, setRotation] = useState(270)
    
    let yearData;
    if (year === "2018"){
        yearData = tboard2018;
    }
    else {
        yearData = tboard2019;
    }
    return(
        yearData.map((month, index) => {
                const faRotation = () => {
                    if (rotation === 270) {
                        setRotation(0)
                    } else {
                        setRotation(270)
                    }
                };

            return (
                <div  key={`key${index}`}>
                    <StyledReachAccordion collapsible onChange={ faRotation  }>
                        <AccordionItem>
                            <h3>
                                <AccordionButton>
                                    <FontAwesomeIcon icon={['fad', 'caret-circle-down']} transform={{ rotate: rotation  }} pull= "left" />
                                    {monthsArr[index]}
                                </AccordionButton>
                                <AccordionPanel>
                                    {monthAccordionGenerator(month)}
                                </AccordionPanel>
                            </h3>
                        </AccordionItem>
                    </StyledReachAccordion>
                </div>
            )
        }
        ))};

function TownBoard() {
        return (
            <StyledTownBoard>
                <h2>Town Board Votes</h2>
                <StyledReachAccordion>
                    {YearsAccordionGenerator(yearsAvailable)}
                </StyledReachAccordion>
            </StyledTownBoard>
        )
};


export default TownBoard;
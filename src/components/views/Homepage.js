import React from 'react'
import { Box, Col, Row, Typography} from '@smooth-ui/core-sc';
import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom';
import LawLinks from "./LawLinks";
import TownBoardLinks from "./TownBoardLinks"


const StyledDivButton = styled.div`
flex-grow: 1;
padding: 1.5rem;

a {
  text-decoration: none;
}

.panel-button {
  font-size: 1.0rem;
  background: #40617F;
  border: 0px;
  box-shadow: 0 3px 15px #000;
  border-radius: 10px;
  padding: 0rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    background: linear-gradient(to right, #90CCf4,#1c7fd5);
   }
}

.panel-button.proposed-laws-panel {
  :hover {
    i {
      visibility: hidden;
    }
    .proposed-laws {
      visibility: visible;
      display: block;
      opacity: 1;
    }
    .proposed-laws a {
      color: black;
      :hover {
        font-weight: bolder;
      }
    }
  }
}

.panel-button a {
  //padding: 1.0rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel-button i {
  z-index: 10;
  padding: 1.0rem;
}

.panel-button .proposed-laws {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: all 0.5s ease;
      display: none;
      z-index: 20;
      li {
        list-style: none;
        font-size: 1.1rem;
      }
  } 

`;

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: window.location.pathname
        }
    }

    render() {
        return (
            <div>
                <Row justifyContent="space-around">
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography style={ {fontSize: "xx-large"}}>
                                        Zoning
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <NavLink exact to="/zoning">
                                    <div className="panel-button">
                                            {/*<span style={{display: "block", color: "white"}}>Interactive zoning map</span>*/}
                                            <i className="fal fa-map-marked" style={{color: "orange", fontSize: "7em"}}>
                                            </i>
                                    </div>
                                    </NavLink>
                                </StyledDivButton>
                            </Row>

                        </Box>
                    </Col>
                    <Col>
                        <Row style={ {textAlign: "center"} }>
                            <Col>
                                <Typography fontSize="xx-large" style={ {position: "relative"}}>
                                    Proposed Laws
                                    <span style={ {position: "absolute", top: '80%', left: '0', color: 'red', fontSize: "small", fontWeight: "bold", zIndex: '20'}}>
                                            <i className="fas fa-megaphone" style={{color: "red", paddingRight: "0.25em"}}></i>
                                            updated for Short Term Rentals
                                        </span>
                                </Typography>
                            </Col>
                        </Row>

                        <Row justifyContent="center">
                            <StyledDivButton>
                                    <div className="panel-button proposed-laws-panel" style={ {position: "relative"}}>
                                        <LawLinks/>
                                        <i className="fal fa-balance-scale-left" style={{color: "orange", fontSize: "7em"}}>
                                        </i>
                                    </div>
                            </StyledDivButton>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large" style={ {position: "relative"}}>
                                        Town Board
                                        <span style={ {position: "absolute", top: '80%', left: '0', color: 'red', fontSize: "small", fontWeight: "bold", zIndex: '21'}}>
                                            <i className="fas fa-megaphone" style={{color: "red", paddingRight: "0.25em"}}></i>
                                            updated for 2020 Budget
                                        </span>
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                        <div className="panel-button proposed-laws-panel">
                                            <TownBoardLinks/>
                                            <i className="fal fa-landmark" style={{color: "orange", fontSize: "7em"}}>
                                            </i>
                                        </div>
                                </StyledDivButton>
                            </Row>
                            {/*<Row justifyContent="center">*/}
                                {/*<StyledDivButton>*/}
                                    {/*<NavLink exact to="/townboard">*/}
                                        {/*<div className="panel-button">*/}
                                                {/*<i className="fal fa-landmark" style={{color: "orange", fontSize: "7em"}}>*/}
                                                {/*</i>*/}
                                        {/*</div>*/}
                                    {/*</NavLink>*/}
                                {/*</StyledDivButton>*/}
                            {/*</Row>*/}
                        </Box>
                    </Col>
                    <Col>
                        <Box >
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large">
                                        Petition
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <NavLink exact to="/petition">
                                        <div className="panel-button">
                                                <i className="fal fa-file-signature" style={{color: "orange", fontSize: "7em"}}>
                                                </i>
                                        </div>
                                    </NavLink>
                                </StyledDivButton>
                            </Row>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large">
                                        Statistics
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <NavLink exact to="/census">
                                        <div className="panel-button">
                                                {/*<span style={{display: "block", color: "white"}}>Marbletown by the numbers</span>*/}
                                                <i className="fal fa-tally" style={{color: "orange", fontSize: "7em"}}>
                                                </i>
                                        </div>
                                    </NavLink>
                                </StyledDivButton>
                            </Row>
                        </Box>
                    </Col>
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large">
                                        Contact Us!
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <NavLink exact to="/contact">
                                        <div className="panel-button">
                                                <i className="fal fa-bullhorn" style={{color: "orange", fontSize: "7em"}}>
                                                </i>
                                        </div>
                                    </NavLink>
                                </StyledDivButton>
                            </Row>
                        </Box>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Homepage;

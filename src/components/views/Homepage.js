import React from 'react'
import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom';
import LawLinks from "./LawLinks";
import TownBoardLinks from "./TownBoardLinks"


const StyledText = styled.span`
  font-size: xx-large;
  text-align: center;
`

const StyledDivButton = styled.div`
flex-grow: 1;
//padding: 1.5rem;

a {
  text-decoration: none;
}

.panel-button {
  overflow: scroll;
  font-size: 1.0rem;
  background: #40617F;
  border: 0px;
  box-shadow: 0 3px 15px #000;
  //border-radius: 10px;
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
  text-decoration: underline;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel-button i {
  z-index: 10;
  padding: 0.5rem;
  @media(max-width: 575px) {
    font-size: 4em;
  }
  @media(min-width: 576px){
    font-size: 7em;  
  }
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

const StyledCssGridHome = styled.div`
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  list-style: none;
  @media(min-width: 576px){
      grid-gap: 0.1rem;  
  }
  @media(max-width: 575px){
      grid-gap: 0.01rem;  
  }
  @media(max-width: 414px){
      grid-gap: 0;  
  }
  margin: 0;
  padding-left: 0;
}

ul > li > figure {
  max-height: 220px;
  overflow: hidden;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  position: relative;
  margin: 0.5em;
}


ul > li > figure > figcaption {
  //position: absolute;
  //top: 0;
  background-color: rgba(255,169,0,.6);
  width: 100%;
  text-align: center;
}

ul > li > figure > figcaption > h3 {
  color: white;
  //padding: .75rem;
  margin-bottom: 0;
  margin-top: .1rem;
  font-size: 1.25rem;
}
ul > li > figure > h3 {
  text-align: center;
  color: white;
  //padding: .75rem;
  margin-bottom: 0;
  margin-top: .1rem;
  font-size: 1.25rem;
  background-color: rgba(179,140,51,.7);
}
`

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
                <StyledCssGridHome>
                <ul>
                    {/*row 1*/}
                    <li>
                        <figure>
                            <figcaption>
                                <h3>Zoning</h3>
                            </figcaption>
                            <StyledDivButton>
                                <NavLink exact to="/zoning">
                                    <div className="panel-button">
                                        {/*<span style={{display: "block", color: "white"}}>Interactive zoning map</span>*/}
                                        <i className="fal fa-map-marked" style={{color: "orange"}}>
                                        </i>
                                    </div>
                                </NavLink>
                            </StyledDivButton>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <figcaption>
                                <h3>Proposed Laws</h3>
                                {/*TODO: add updated str i element*/}
                            </figcaption>
                            <StyledDivButton>
                                <div className="panel-button proposed-laws-panel" style={{position: "relative"}}>
                                    <LawLinks/>
                                    <i className="fal fa-balance-scale-left" style={{color: "orange"}}>
                                    </i>
                                </div>
                            </StyledDivButton>

                        </figure>
                    </li>
                    {/*row 2*/}
                    <li>
                        <figure>
                            <figcaption><h3>Town Board</h3></figcaption>
                            <StyledDivButton>
                                <div className="panel-button proposed-laws-panel" style={{position: "relative"}}>
                                    <TownBoardLinks/>
                                    <i className="fal fa-landmark" style={{color: "orange"}}>
                                    </i>
                                </div>
                            </StyledDivButton>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <figcaption><h3>Petition</h3></figcaption>
                            <StyledDivButton>
                                <NavLink exact to="/petition">
                                    <div className="panel-button">
                                        <i className="fal fa-file-signature" style={{color: "orange"}}>
                                        </i>
                                    </div>
                                </NavLink>
                            </StyledDivButton>
                        </figure>
                    </li>
                    {/*row 3*/}
                    <li>
                        <figure>
                            <figcaption><h3>Statistics</h3></figcaption>
                            <StyledDivButton>
                                <NavLink exact to="/census">
                                    <div className="panel-button">
                                        <i className="fal fa-tally" style={{color: "orange"}}>
                                        </i>
                                    </div>
                                </NavLink>
                            </StyledDivButton>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <figcaption><h3>Contact Us</h3></figcaption>
                            <StyledDivButton>
                                <NavLink exact to="/contact">
                                    <div className="panel-button">
                                        <i className="fal fa-bullhorn" style={{color: "orange"}}>
                                        </i>
                                    </div>
                                </NavLink>
                            </StyledDivButton>
                        </figure>
                    </li>
                </ul>
                </StyledCssGridHome>
            </div>
        );
    }
}

export default Homepage;

import React from "react";
import {Component} from "react";
import styled from "styled-components";
import {Col, Row, Typography,
    Button,
    Toggler,
    Modal,
    ModalDialog,
    ModalContent,
    ModalHeader, ModalBody, ModalFooter} from "@smooth-ui/core-sc";
import {StrCommentData} from "./StrCommentData";

const  StyledSTR2019 = styled.section`

@media screen and (max-width: 450px) {
    font-size: smaller;
} 
@media screen and (min-width: 451px) {
    margin: 0 auto;
}

#draft-str-law .caption {
    border-bottom: solid black;
}

#draft-str-law h1 {
    font-size: 1.7rem !important;
    margin-bottom: 1rem;
}

#draft-str-law h2 {
    font-size: 1.5rem !important;
}

#draft-str-law h3 {
    font-size: 1.3rem !important;
}

#draft-str-law .level-A {

}

.level-ABC table, thead, th, td {
    border: solid 1px;
}

ol.level-ABC {
    list-style-type: upper-alpha;
}

ol.level-ABC > li::before {
    font-weight: bolder;
}

ol.level-abc {
    list-style-type: lower-alpha;
}


body {
    counter-reset: my-counter;
    overflow-x: hidden;
}

ol.level-parens {
    list-style-type: none;
    counter-reset: my-counter4;
}

ol.level-parens li::before {
    font-weight: bold;
    counter-increment: my-counter4;
    content: "(" counter(my-counter4)") ";
}

ol.level-bracketed {
    list-style-type: none;
}

ol.level-bracketed li::before {
    font-weight: bold;
    counter-increment: my-counter;
    content: "[" counter(my-counter)"] ";
}

ol.roman-list {
    list-style-type: lower-roman;
}

ol.roman-list > li::before {
    content: none;
}

.level-bracketed-2 {
    list-style-type: none;
    counter-reset: my-counter2;
    list-style-type: none;
}

ol.level-bracketed-2 > li::before {
    font-weight: bold;
    counter-increment: my-counter2;
    content: "[" counter(my-counter2) "] ";
}

.level-bracketed-3 {
    list-style-type: none;
    counter-reset: my-counter3;
    list-style-type: none;
}

ol.level-bracketed-3 > li::before {
    font-weight: bold;
    counter-increment: my-counter3;
    content: "[" counter(my-counter3) "] ";
}
`

class Str2019Sept extends Component {

    render() {
        return (
            <StyledSTR2019>
                <Row>
                    <Col xs={12}>
                        <article id="draft-str-law">
                            <section className="caption">

                                <h2>SHORT TERM RENTAL LAW TOWN OF MARBLETOWN LOCAL LAW NO. of 2019</h2>
                                <h3>A LOCAL LAW AMENDING CHAPTER ZONING LAW OF
                                    THE TOWN OF MARBLETOWN, ULSTER COUNTY, NEW YORK TO PERMIT SHORT TERM RENTALS.</h3>
                                <h4>Be it enacted by the Town Board of the Town of Marbletown as follows:</h4>
                            </section>

                            <section id="str-section-1">
                                <h1>SECTION 1 PURPOSE</h1>
                                <p>This Local Law is enacted to allow the use of housing units in the Town of Marbletown
                                    for short term rental purposes (STR) so as to enhance the tourism economy of the Town
                                    while protecting the safety of renters and the privacy for residences and freedom
                                    from nuisances; ensuring that the value of housing is tied to its use for residential
                                    purposes, helping to maintain the affordability of both home ownership and rental units;
                                    encouraging the development of appropriate sized short term rental facilities in the
                                    commercial areas of the community where allowed; and, continuing the use of housing
                                    for traditional bed and breakfast accommodations.</p>
                            </section>

                            <section id="str-section-2">
                                <h1>SECTION 2 INTENT AND AUTHORITY</h1>
                                <p>The intent of this Local Law is to regulate the use of residential structures for
                                    short term rental purposes by defining such uses in Section ____ of the Town of
                                    Marbletown Zoning Law, and providing quality of life, environmental, land use,
                                    building code safety and STR operational requirements to be met in permitting these
                                    uses to be established. This Local Law is intended to apply to all existing and future
                                    housing units in the Town as the requirements for the establishment of a short
                                    term rental.
                                </p>
                                <p>
                                    The Town Board intends to work jointly with RUPCO in the creation of a Homeownership
                                    Program
                                    <Toggler>
                                        {({ toggled, onToggle }) => (
                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Legality of RUPCO subsidy
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.A}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                        ) }
                                    </Toggler>
                                    <span> </span>
                                    and shall apply all or a portion of the the
                                    <Toggler>
                                        {({ toggled, onToggle }) => (
                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Typo/Spelling
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.grammar.A}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                        ) }
                                    </Toggler>
                                    <span> </span>fees generated by this Local Law
                                    to the fund. The Town Board shall at it's
                                    <Toggler>
                                        {({ toggled, onToggle }) => (
                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Typo/Spelling
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.grammar.B}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                        ) }
                                    </Toggler>
                                    <span> </span>
                                    organizational meeting establish the maximum
                                    amount of funds collected which shall be maintained in an allocated fund for the
                                    intended purpose, funds not used in any proceeding
                                    <Toggler>
                                        {({ toggled, onToggle }) => (
                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Typo/Spelling
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.grammar.C}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                        ) }
                                    </Toggler>
                                    <span> </span>
                                    fiscal year shall be carried over
                                    for future usgage
                                    <Toggler>
                                        {({ toggled, onToggle }) => (
                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Typo/Spelling
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.grammar.D}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                        ) }
                                    </Toggler>
                                    <span> </span>
                                    until such time as the Town Board determines by amending this Local Law
                                    to terminate the fund. At no time shall less than 75 percent of registration fees be
                                    dedicated to a homebuying program.
                                </p>
                                <p>
                                    This Local Law is adopted in accordance with Articles 9 and 16 of the Town Law of the State of
                                    New York which grants the Town of Marbletown the authority to enact local laws for the purpose
                                    of promoting the health, safety and welfare of the Town, and in accordance with
                                    Municipal Home Rule Law, Article 2, Section 10, that gives the Town of Marbletown
                                    the power to protect and enhance its physical environment.
                                </p>
                            </section>

                            <section id="str-section-3">
                                <h1>
                                    SECTION 3 APPLICATION PROCESS
                                </h1>
                                <div>
                                    <ol className="level-ABC">
                                        <li>
                                                Application process and required submittals:
                                        </li>
                                        <ol className="level-parens">
                                            <li>
                                                Provide a completed annual permit application and fee, as designated by the
                                                Town Board by Resolution.
                                            </li>
                                            <li>
                                                Provide a safety/egress plan, to be posted in rental unit in a visible
                                                location and on the back of each bedroom door.
                                            </li>
                                            <li>
                                                A parking layout plan identifying where parking is to be located is
                                                required and shall accommodate sufficient parking for tenants and residents.
                                                The parking shall include 1 parking space per bedroom plus 1 additional space.
                                                Parking design and placement shall be accommodated off-street and shall
                                                not restrict access for fire and safety vehicles.
                                            </li>
                                            <li>
                                                Provide garbage removal plan. Garbage shall not be allowed to remain
                                                outside for a period greater than 24 hours at curbside and shall be placed
                                                within a container. Property owner shall be responsible for clean-up of
                                                any garbage strewn by animals.
                                            </li>
                                            <li>
                                                For non-owner occupied STR's, the name and contact information of the
                                                designated Host shall be provided to the Building Department and shall be
                                                posted in the STR. Both the property owner and the Host will be responsible
                                                for addressing renter issues and compliance with STR requirements within
                                                24 hours. When host contact information changes the Building Department
                                                will be notified and STR posted Renter Notices shall be revised accordingly.
                                            </li>
                                            <li>
                                                Occupancy shall be limited to 2 guests per bedroom and total maximum house
                                                occupancy shall be posted in the STR. Occupancy shall not be greater than
                                                that allowed based on the septic requirements as a single family home
                                                <Toggler>
                                                    {({toggled, onToggle}) => (
                                                        <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Septic capacity is based on bedrooms.
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.E}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                    )}
                                                </Toggler>
                                                <span> </span>
                                                Children twelve years old and under are not counted as guests.
                                                <Toggler>
                                                    {({toggled, onToggle}) => (
                                                        <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Unlimited small children possible
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.F}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                    )}
                                                </Toggler>
                                                <span> </span>
                                            </li>
                                            <li>
                                                Property shall be locatable on GPS and Address location shall be clear demarcated on the property.
                                                <Toggler>
                                                    {({toggled, onToggle}) => (
                                                        <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Typo/clarity
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.E}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                    )}
                                                </Toggler>
                                                <span> </span>
                                            </li>
                                        </ol>
                                        <li>
                                            STR's must register with Ulster County (per Ulster County Local Law #5 of 1991)
                                            and a copy of said registration is to accompany STR Applications to the Town of
                                            Marbletown Building Department.
                                        </li>
                                        <li>
                                            STR's must pass a yearly fire/safety inspection and the report of said inspection
                                            is to be attached to STR annual renewal permit applications.
                                            All STR units must
                                            comply with NYS Building Code requirements.
                                        </li>
                                        <li>
                                            STR shall be limited to Single Rentals (multiple rentals simultaneously are not permitted) per home.
                                        </li>
                                        <li>
                                            The STR establishment shall not have more than ten occupants as lodgers and
                                            limited to a maximum capacity of 2 guests per bedroom. Children twelve years
                                            old and under are not counted as guests.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Unlimited children
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.F}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            Complaints and Violations issued by the Town of Marbletown CEO will be considered
                                            at annual renewal. Three (3) Violations within any 12 month period or portion
                                            thereof will be grounds for permit termination.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    CEO gets total discretion with no oversight and applicant has no due process
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.G}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            Only the property owner is permitted to register an STR. An individual property
                                            owner can register or have an interest in one (1) non-owner occupied STR unit.
                                            Registrations are transferable not Transferable.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    This sentence is not English.  Permits run with the land in any case.
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.grammar.F}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                            The maximum number of units that can be registered by any property owner is 1 Owner Occupied and 1 Non-Owner Occupied.
                                        </li>
                                        <li>
                                            The Town Board can set caps on the number of both owner occupied STR's and
                                            nonowner occupied STR's, on an annual basis, permitted within the Town and shall
                                            establish the fee schedule on an annual basis.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    No caps are set, they are just possible in the future
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {/*{STRcomments.A}*/}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                        </li>
                                        <li>
                                            Host will provide guests with copies of local laws, pertaining to noise,
                                            fire, safety requirements. Emergency contact information as well as E911 address
                                            of property shall be clearly identifiable.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Each STR will have to guess what the applicable law are, if any.
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.I}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            A property map that clearly depicts the property boundaries shall be provided.
                                            Street address of property shall be clearly identifiable from the street and
                                            shall be posted in a visible location on the bedroom door.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    No standards for what this means
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.J}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            Approved STR's will be assigned a registration number that must be included
                                            in all rental listings, both print and on-line and posted within the STR.
                                        </li>
                                        <li>
                                            Exterior advertising is prohibited.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Already state law
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.K}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            Temporary Structures, Tents, Trailors and RV's are not contemplated in this
                                            regulation and are prohibited for the purpose of STR.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Clarity of terms/spelling
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.grammar.G}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            STR are prohibited in multi-family dwellings with 3 or more units unless Owner
                                            occupies one of the dwelling units.
                                        </li>
                                        <li>
                                            STR shall be permitted in all Zoning Districts with the exception of Industrial.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Residential zones become commercial enterprises
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.L}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            <strong>[*** J. in original] </strong>
                                            Failure to comply with these standards may result in denial or cancellation of of STR Applications/Approval.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    May deny not shall- double J clause!
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.M}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                            <span> </span>
                                        </li>
                                        <li>
                                            <strong>[*** K. in original] </strong>
                                            Three or more violations of this Local Law may lead to revocation of an approved
                                            STR operating permit and fines. Property owner shall not be permitted to reapply
                                            for a new STR permit for a period of 6 months after revocation.
                                            <Toggler>
                                                {({toggled, onToggle}) => (
                                                    <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    May revoke not shall
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.N}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                )}
                                            </Toggler>
                                        </li>
                                    </ol>
                                </div>

                            </section>

                            <section id="str-section-4">
                                <h1>
                                    <strong>SECTION 4- DEFINITIONS</strong>
                                </h1>
                                <dl>
                                    <dt>
                                        <strong>HOST</strong>
                                    </dt>
                                    <dd>
                                        A designated adult who lives within a 10 mile distance from the STR property and
                                        is required to be available to promptly deal with emergencies and other STR renter
                                        issues and compliance with STR operating requirements in the owner' s absence.
                                    </dd>
                                    <dt>
                                        <strong>SHORT TERM RENTAL (STR)</strong>
                                    </dt>
                                    <dd>
                                        An accessory use or supplementary business allowing a Short-Term Rental (less than thirty days)
                                        of at least one room in a private home or habitable accessory structures. Property owners
                                        seeking to operate a Short-Term Rental must apply for and receive from the Town of
                                        Marbletown a Short-Term Rental Registration, and post the Marbletown Registration
                                        Number on all on-line listings. Registrations are good for one (l) calendar year,
                                        and the total number of properties owned by or in which an interest is held by an
                                        individual person(s) or entity offering STRs is limited to one (1) Owner Occupied
                                        and 1 Non-Owner Occcupied.
                                        <Toggler>
                                            {({toggled, onToggle}) => (
                                                <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Specificall allow entities to own str
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.O}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                            )}
                                        </Toggler>
                                    </dd>
                                    <dt>
                                        <strong>SHORT TERM RENTAL (STR) NON-OWNER OCCUPIED</strong>
                                    </dt>
                                    <dd>
                                        A supplementary business in a private home or habitable accessory structure in which
                                        the entire private residence is rented for less than 30 days and no host/owner is present,
                                        and in which no public restaurant is maintained and no other commercial services are offered.
                                        STR non-owner occupied establishments must have a designated local Host as defined herein;
                                        and must comply with the other STR Standards.
                                        <Toggler>
                                            {({toggled, onToggle}) => (
                                                <span>
                                                <i className=" far fa-comment"
                                                   style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    no limit on non owner occupied
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {StrCommentData.policy.P}
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary"
                                                                        onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                            )}
                                        </Toggler>
                                    </dd>
                                </dl>
                            </section>
                            <section id="str-section-5">
                                <h1>
                                    SECTION 5. ZONING AMENDMENT
                                </h1>
                                <p>
                                    <strong>ARTICLE 200, ZONING,</strong> is hereby amended as follows:
                                </p>
                                <p>
                                    Section 200-8, Schedule of Use Regulations, shall be amended by adding, a new use category entitled
                                    Short Term Rentals, which shall be permitted, subject to issuance of a permit by the
                                    Marbletown Building Department, under the heading ACCESORY USES, and shall be added
                                    under residential uses as Permitted (P), in all zoning districts.
                                </p>
                            </section>
                            <section>
                                <h1>SECTION 6. EFFECTIVE DATE</h1>
                                <p>
                                    This law shall become effective upon the filing with the Secretary of the State of New York.
                                </p>
                            </section>
                        </article>
                    </Col>
                </Row>

            </StyledSTR2019>
        )

    }
}

export default Str2019Sept
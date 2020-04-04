import React from "react";
import {Component} from "react";
import styled from "styled-components";
import {Col, Row} from "@smooth-ui/core-sc";

const StyledDeletedText = styled.span`
  text-decoration: line-through;
  color: red;
`;

const StyledAddedText = styled.span`
i {
    color: black;
  }
  font-weight: bold;
  text-decoration: underline;
  color: #43a047;  
`;

const StyledChangedText = styled.span`
  color: black;
  text-decoration: double;
`

const  StyledSTR2019adopted = styled.section`

@media screen and (max-width: 450px) {
    font-size: smaller;
} 
@media screen and (min-width: 451px) {
    margin: 0 auto;
    font-size: small;
}

#draft-str-law .caption {
    border-bottom: solid black;
}

#draft-str-law h1 {
    font-size: 1.6rem !important;
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

class Str2019Adopted extends Component {

    render() {
        return (
            <StyledSTR2019adopted>
                <Row>
                    <Col xs={12}>
                        <p>Marbletown Short Term Rental Law Adopted- redlined against law presented at public hearing.
                        Note, that the original version sent to Ulster County Planning Board is different from both
                        the adopted version and the public hearing version.  That version can be seen under the "Proposed STR Law" tab above.</p>
                        <article id="draft-str-law">
                            <section className="caption">

                                <h3>SHORT TERM RENTAL LAW TOWN OF MARBLETOWN LOCAL LAW NO. of 2019</h3>
                                <h4>A LOCAL LAW AMENDING CHAPTER ZONING LAW OF
                                    THE TOWN OF MARBLETOWN, ULSTER COUNTY, NEW YORK TO PERMIT SHORT TERM RENTALS.</h4>
                                <h5>Be it enacted by the Town Board of the Town of Marbletown as follows:</h5>
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
                                    short term rental purposes by defining such uses in <StyledDeletedText>Section ____ of</StyledDeletedText>the Town of
                                    Marbletown Zoning Law, and providing quality of life, environmental, land use,
                                    building code safety and STR operational requirements to be met in permitting these
                                    uses to be established. This Local Law is intended to apply to all existing and future
                                    housing units in the Town as the requirements for the establishment of a short
                                    term rental.
                                </p>
                                <p>
                                    The Town Board intends to work jointly with <StyledDeletedText>RUPCO</StyledDeletedText>
                                    <StyledAddedText>a local Housing Authority designated by Town Board</StyledAddedText> <span> </span>
                                    in the creation of a Homeownership Program <StyledDeletedText>Fund </StyledDeletedText>and shall apply all or a portion of the the
                                    fees generated by this Local Law to the fund. The Town Board shall at it's organizational
                                    meeting establish the maximum amount of funds collected which shall be maintained in an
                                    allocated fund for the intended purpose<StyledAddedText/>, f<StyledAddedText/> <StyledDeletedText>. F</StyledDeletedText>unds
                                    not used in any proceeding fiscal year shall be carried over for future usage until such time as the Town Board determines by amending this Local Law
                                    to terminate the fund. <StyledDeletedText>At no time shall less than 75 percent of registration fees be
                                    dedicated to a homebuying program.</StyledDeletedText>
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
                                                Provide a <StyledDeletedText>safety/egress plan,</StyledDeletedText>
                                                <StyledAddedText><strong>safety/egress plan,</strong></StyledAddedText>
                                                to be posted in rental unit in a visible
                                                location and on the back of each bedroom door.
                                            </li>
                                            <li>
                                                <StyledAddedText>A <strong>parking layout plan</strong></StyledAddedText>
                                                <StyledDeletedText>Provide a parking layout plan </StyledDeletedText>
                                                identifying where parking is to be located is
                                                required and shall accommodate sufficient parking for tenants and residents.
                                                The parking shall include 1 parking space per bedroom plus 1 additional space.
                                                Parking design and placement shall be accommodated off-street and shall
                                                not restrict access for fire and safety vehicles.
                                            </li>
                                            <li>
                                                <StyledAddedText>Provide <strong>waste removal plan.</strong></StyledAddedText>
                                                <StyledDeletedText>Provide garbage removal plan.</StyledDeletedText>
                                                Garbage shall not be allowed to remain
                                                outside for a period greater than 24 hours at curbside and shall be placed
                                                within a container. Property owner shall be responsible for clean-up of
                                                any garbage strewn by animals.
                                            </li>
                                            <li>
                                                <i>[ moved to B(1) ]</i>
                                                <StyledDeletedText>
                                                For non-owner occupied STR's, the name and contact information of the
                                                designated Host shall be provided to the Building Department and shall be
                                                posted in the STR. Both the property owner and the Host will be responsible
                                                for addressing renter issues and compliance with STR requirements within
                                                24 hours. When host contact information changes the Building Department
                                                will be notified and STR posted Renter Notices shall be revised accordingly.
                                                </StyledDeletedText>
                                            </li>
                                            <li>
                                                <StyledDeletedText>
                                                Occupancy shall be limited to 2 guests per bedroom and total maximum house
                                                occupancy shall be posted in the STR. Occupancy shall not be greater than
                                                that allowed based on the septic requirements as a single family home
                                                Children twelve years old and under are not counted as guests.
                                                </StyledDeletedText>
                                            </li>
                                            <li>
                                                <i>[ moved to B(2) </i>
                                                <StyledDeletedText>
                                                Property shall be locatable on GPS and Address location shall be clear demarcated on the property.
                                                </StyledDeletedText>
                                            </li>
                                        </ol>
                                        <StyledAddedText>
                                            <p>
                                                B.
                                            </p>

                                            <p>
                                                <i>[previously A(5)]</i><span>( 1 )</span>
                                                For non-owner occupied STR's, the name and contact information of the
                                                designated Host shall be provided to the Building Department and shall be
                                                posted in the STR. Both the property owner and the Host will be responsible
                                                for addressing renter issues and compliance with STR requirements within
                                                24 hours. When host contact information changes the Building Department
                                                will be notified and STR posted Renter Notices shall be revised accordingly.
                                            </p>
                                            <p>
                                                <span>( 2 ) <i>[previously A(7)]</i> </span>
                                                Property shall be locatable on GPS and Address location shall be clear demarcated on the property.
                                            </p>

                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            STR's must register with Ulster County (per Ulster County Local Law #5 of 1991)
                                            and a copy of said registration is to accompany STR Applications to the Town of
                                            Marbletown Building Department.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p> C. <i> [previously B] </i>  </p>
                                            <p>
                                                STR's must register with Ulster County (per Ulster County Local Law #5 of 1991)
                                                and a copy of said registration is to accompany STR Applications to the Town of
                                                Marbletown Building Department.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            STR's must pass a yearly fire/safety inspection and the report of said inspection
                                            is to be attached to STR annual renewal permit applications.
                                            All STR units must
                                            comply with NYS Building Code requirements.
                                        </li>
                                        </StyledDeletedText>

                                        <StyledAddedText>
                                            <p> D <i> [previously C] </i></p>
                                            <p>

                                                STR's must pass a yearly fire/safety inspection and the report of said inspection
                                                is to be attached to STR annual renewal permit applications.
                                                All STR units must comply with NYS Building Code requirements
                                                <i> [public hearing C stopped here, adopted versions adds open violations clause] </i>
                                                and shall have no open violations.
                                            </p>
                                        </StyledAddedText>

                                        <StyledDeletedText>
                                            <li>
                                                STR shall be limited to Single Rentals (multiple rentals simultaneously are not permitted) per home.
                                            </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p> E <i> [previously D] </i></p>
                                            <p>
                                            STR shall be limited to Single Rentals (multiple rentals simultaneously are not permitted) per home.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            The STR establishment shall not have more than ten occupants as lodgers and
                                            limited to a maximum capacity of 2 guests per bedroom. Children twelve years
                                            old and under are not counted as guests.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p> F <i> [previously E] </i></p>
                                            <p>
                                                The STR establishment shall not have more than ten occupants as lodgers and
                                                limited to a maximum capacity of 2 guests per bedroom. Children <i> [previously twelve] </i>
                                                8 years old and under are not counted as guests.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            Complaints and Violations issued by the Town of Marbletown CEO will be considered
                                            at annual renewal. Three (3) Violations within any 12 month period or portion
                                            thereof will be grounds for permit termination.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>G <i> [previously F] </i></p>
                                            <p>
                                                Complaints and Violations issued by the Town of Marbletown CEO will be considered
                                                at annual renewal. Three (3) Violations within any 12 month period or portion
                                                thereof will be grounds for permit termination.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                            <li>
                                                Only the property owner is permitted to register an STR. An individual property
                                                owner can register or have an interest in one (1) non-owner occupied STR unit.
                                                Registrations are not transferable.
                                                The maximum number of units that can be registered by any property owner is 1 Owner Occupied and 1 Non-Owner Occupied.
                                            </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>H <i> [previously G] </i></p>
                                            <p>
                                                Only the property owner is permitted to register an STR. An individual property
                                                owner can register or have an interest in one (1) non-owner occupied STR unit.
                                                <i> [ following sentence added to post-public hearing version ] </i>
                                                Registration by a corporation whose owners have an interest in more than one (1)
                                                STR's is prohibited in residential districts.
                                                <i> [ following nonsensical sentence is same used in original first version sent to Ulster County Planning ] </i>
                                                Registrations are transferable not Transferable.
                                                The maximum number of units that can be registered by any property owner is 1 Owner Occupied and 1 Non-Owner Occupied.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                            <li>
                                                The Town Board can set caps on the number of both owner occupied STR's and
                                                nonowner occupied STR's, on an annual basis, permitted within the Town and shall
                                                establish the fee schedule on an annual basis.
                                            </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>I <i> [ previously H ] </i></p>
                                            <p>
                                                The Town Board can set caps on the number of both owner occupied STR's and
                                                nonowner occupied STR's, on an annual basis, permitted within the Town and shall
                                                establish the fee schedule on an annual basis.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            Host will provide guests with copies of local laws, pertaining to noise,
                                            fire, safety requirements. Emergency contact information as well as E911 address
                                            of property shall be clearly identifiable.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>J <i> [ previously I ] </i></p>
                                            <p>Host will provide guests with copies of local laws, pertaining to noise,
                                                fire, safety requirements. Emergency contact information as well as E911 address
                                                of property shall be clearly identifiable.</p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            A property map that clearly depicts the property boundaries shall be provided.
                                            Street address of property shall be clearly identifiable from the street and
                                            shall be posted in a visible location on the bedroom door.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>K <i> [ previously J ] </i></p>
                                            <p>
                                                A property map that clearly depicts the property boundaries shall be provided.
                                                Street address of property shall be clearly identifiable from the street and
                                                shall be posted in a visible location on the bedroom door.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            Approved STR's will be assigned a registration number that must be included
                                            in all rental listings, both print and on-line and posted within the STR.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>L <i> [ previously K ] </i></p>
                                            <p>
                                                Approved STR's will be assigned a registration number that must be included
                                                in all rental listings, both print and on-line and posted within the STR.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            Exterior advertising is prohibited.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>M <i> [ previously L ] </i></p>
                                            <p>
                                                Exterior advertising is prohibited.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                            <li>
                                                Temporary Structures, Tents, Trailors and RV's are not contemplated in this
                                                regulation and are prohibited for the purpose of STR.
                                            </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>N <i> [ previously M ] </i></p>
                                            <p>
                                                Temporary Structures, Tents, Trailors and RV's are not contemplated in this
                                                regulation and are prohibited for the purpose of STR.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                            <li>
                                            STR are prohibited in multi-family dwellings with 3 or more units unless Owner
                                            occupies one of the dwelling units.
                                            </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>O <i> [ previously N ] </i></p>
                                            <p>
                                                STR are prohibited in multi-family dwellings with 3 or more units unless Owner
                                                occupies one of the dwelling units.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            STR shall be permitted in all Zoning Districts with the exception of Industrial.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>P <i> [ previously O ] </i></p>
                                            <p>
                                                STR shall be permitted in all Zoning Districts with the exception of Industrial.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            Failure to comply with these standards may result in denial or cancellation of of STR Applications/Approval.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>Q <i> [ previously P ] </i></p>
                                            <p>
                                                Failure to comply with these standards may result in denial or cancellation of of STR Applications/Approval.
                                            </p>
                                        </StyledAddedText>
                                        <StyledDeletedText>
                                        <li>
                                            Three or more violations of this Local Law may lead to revocation of an approved
                                            STR operating permit and fines. Property owner shall not be permitted to reapply
                                            for a new STR permit for a period of 6 months after revocation.
                                        </li>
                                        </StyledDeletedText>
                                        <StyledAddedText>
                                            <p>R <i> [ previously Q ] </i></p>
                                            <p>
                                                Three or more violations of this Local Law may lead to revocation of an approved
                                                STR operating permit and fines. Property owner shall not be permitted to reapply
                                                for a new STR permit for a period of 6 months after revocation.
                                            </p>
                                        </StyledAddedText>
                                        <StyledAddedText>
                                            <p>S</p>
                                            <p>The Town Board shall establish by resolution annual fees, penalties for non-compliance
                                            and violations, and may establish the maximum number of permits issued by the Marbletown
                                            Code Enforcement Officer.  This resolution may be amended or changed by the Town Board as needed.</p>
                                        </StyledAddedText>
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

            </StyledSTR2019adopted>
        )

    }
}

export default Str2019Adopted
import React from "react";
import {Component} from "react";
import {Col, Row} from "@smooth-ui/core-sc";
import Table from "../TableGenerator";
import styled from 'styled-components'


const StyledTable = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
  `

class StrCompared extends Component {

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <p>
                        Short term rental laws compared.
                    </p>
                    <StyledTable>
                        <Table/>
                    </StyledTable>
                </Col>
            </Row>
        )

    }
}

export default StrCompared;
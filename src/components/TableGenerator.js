import React from 'react'
import { strColumns, strData } from "../api/strData";

function Table(props) {
    const {  columns, rows } = props

    // render table
    return (
            <table>
                {/*// if headers exist render thead row*/}
                { columns &&
                <thead>
                    <tr>
                        { columns.map( column => (
                            <th>{ column }</th>
                        )) }
                    </tr>
                </thead>
                }

                <tbody>
                { rows.map(
                    (row, i) => (
                        <tr>
                            {row.map(data => {
                              return <td key={ i }>{ data }</td>
                            })
                            }
                        </tr>
                    )
                )}
                </tbody>
            </table>
    )
}

export default Table



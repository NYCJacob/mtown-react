import React, { useState } from "react";
import {AgGridReact} from "ag-grid-react";
import "../../styles/ag-grid-custom.sass"
import { budgetData } from '../../api/budgetData'

export default function MarbletownBudget2020() {

    function isCommentRow(params) {
        return params.data.section === "comments";
    }
    function isRevenueRow(params) {
        return params.data.section === "revenue";
    }

    //   see ag-grid/javascript-grid-column-spanning
    //   for col spanning and style customization for comments row
    const cellClassRules = {
        "comments-cell": 'data.section === "comments"',
        "revenue": 'data.section === "revenue"'
    };

    const cellClassRulesTotals = {
        "totals-cell": 'data.section === "totals"'
    };

    const [ columnDefs, setcolumnDefs ] = useState(
            [
                {headerName: "Description", field: 'codeDesc', minWidth: 10, autoHeight: true,
                    colSpan: function (params) {
                        if (isCommentRow(params)){
                            return 8;
                        } else if ( isRevenueRow(params)) {
                            return 8;
                        } else {
                            return 1
                        }
                    },
                    cellClassRules: cellClassRules
                },
                {headerName: "Category", field: 'category', width: 100},
                {headerName: "2016 Actual", field: "actual2016", width: 125,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2017 Actual", field: "actual2017", width: 125,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2018 Actual", field: "actual2018", width: 125,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2019 Adopted", field: "adopted2019", width: 125,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2019 Est Actual", field: "estactual2019", width: 125,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2020 Proposed", field: "proposed2020", width: 125,
                    cellClassRules: cellClassRulesTotals}
            ]
    );

    const [ rowData, setrowData ] = useState(
        budgetData
    );

    const onFirstDataRendered = function(params) {
        params.api.sizeColumnsToFit();
    };


    return(
        <div>
            <div>
                <h2>
                    MORE COMING SOON
                </h2>
                <div style={{height:'75vh',width: '90vw'}}>
                    <div id="budgetGrid" style={{height:'80vh',width: '90vw'}}  className="ag-theme-balham" >
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={rowData}
                            onFirstDataRendered={onFirstDataRendered}
                        >
                        </AgGridReact>
                    </div>
                </div>
            </div>
        </div>
    )
}


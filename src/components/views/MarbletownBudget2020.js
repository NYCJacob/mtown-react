import React, { useState } from "react";
import {AgGridReact} from "ag-grid-react";
import "../../styles/ag-grid-custom.sass"


export default function MarbletownBudget2020() {
    const [ columnDefs, setcolumnDefs ] = useState(
            [
                {headerName: "Description", field: 'codeDesc', width: 100},
                // {headerName: "Code", field: 'code', width: 75},
                {headerName: "Category", field: 'category', width: 100},
                {headerName: "2016 Actual", field: "actual2016", width: 125},
                {headerName: "2017 Actual", field: "actual2017", width: 125},
                {headerName: "2018 Actual", field: "actual2018", width: 125},
                {headerName: "2019 Adopted", field: "adopted2019", width: 125},
                {headerName: "2019 Est Actual", field: "estactual2019", width: 125},
                {headerName: "2020 Proposed", field: "proposed2020", width: 125}
            ]
    );

    const [ rowData, setrowData ] = useState(
        [
            {codeDesc: '', category: '', actual2016: '', proposed2020: ''}
        ]
    );

    const onFirstDataRendered = function(params) {
        params.api.sizeColumnsToFit();
    }

    return(
        <div>
            <div>
                <h2>
                    COMING SOON
                </h2>
                <div style={{height:'75vh',width: '90vw'}}>
                    <div id="budgetGrid" style={{height:'75vh',width: '75vw'}}  className="ag-theme-balham" >
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


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

    function isRevenueTotalsRow(params) {
        return params.data.section === "revenue-totals";
    }

    function isTotalsRow(params) {
        return params.data.section === "spending-totals";
    }

    function isSurplusRow(params) {
        return params.data.section === "surplus";
    }

    //   see ag-grid/javascript-grid-column-spanning
    //   for col spanning and style customization for comments row
    const cellClassRules = {
        "actual-cell": 'data.section === "actual" ',
        "comments-cell": 'data.section === "comments"',
        "revenue-cell": 'data.section === "revenue"',
        "revenue-totals": 'data.section === "revenue-totals"'
    };

    const cellClassRulesTotals = {
        "actual-cell": 'data.section === "actual" ',
        "actual-delta": 'data.section === "actual-delta" ',
        "totals-cell": 'data.section === "spending-totals" ',
        "spending-cell": 'data.section === "spending" ',
        "revenue-cell": 'data.section === "revenue"',
        "revenue-totals": 'data.section === "revenue-totals"'
    };

    function formatNumber(number) {
        return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    function currencyFormatter(params) {
        if (params.value > 0){
            return "$" + formatNumber(params.value);
        } else
            return params.value;

    }

    const [ columnDefs, setcolumnDefs ] = useState(
            [
                {headerName: "Description", field: 'codeDesc', width: 100, autoHeight: true,
                    colSpan: function (params) {
                        if (isCommentRow(params)){
                            return 8;
                        } else if ( isRevenueRow(params)) {
                            return 1;
                        } else if (isTotalsRow(params)) {
                            return 2
                        } else if (isRevenueTotalsRow(params)) {
                            return 2
                        }
                        else if (isSurplusRow(params)) {
                            return 2
                        }
                        else {
                            return 1
                        }
                    },
                    cellClassRules: cellClassRules
                },
                {
                    headerName: "2016 - 2017",
                    children: [
                        {headerName: "Cat", field: 'category', width: 70},
                        {
                            headerName: "2016 Actual", field: "actual2016", width: 110,
                            columnGroupShow: "open",
                            cellClassRules: cellClassRulesTotals},
                        {
                            headerName: "2017 Actual", field: "actual2017", width: 110,
                            columnGroupShow: "open",
                            cellClassRules: cellClassRulesTotals},
                        {
                            headerName: "2018",
                            field: "actual2018",
                            width: 70,
                            columnGroupShow: null,
                            valueFormatter: currencyFormatter,
                            cellClassRules: cellClassRulesTotals,

                        }
                    ]
                },
                {headerName: "2019 Adopted", field: "adopted2019", width: 110,
                    valueFormatter: currencyFormatter,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2019 Est Actual", field: "estactual2019", width: 110,
                    valueFormatter: currencyFormatter,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2020 Proposed", field: "proposed2020", width: 110,
                    valueFormatter: currencyFormatter,
                    cellClassRules: cellClassRulesTotals},
                {headerName: "2020 Nov 20 ", field: "adopted2020ONov20", width: 110,
                    valueFormatter: currencyFormatter,
                    cellClassRules: cellClassRulesTotals},
                {
                    headerName: "Nov Diff",
                    width: 90,
                    colId: "nov20Diff",
                    cellClassRules: cellClassRulesTotals,
                    valueGetter: function (params) {
                        return params.data.adopted2020ONov20 - params.data.proposed2020;
                    }
                }
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
                <div style={{height:'95vh',width: '90vw'}}>
                    <h2 style={ {marginTop: '0', marginBottom: '0', textAlign: 'center'} }>Consolidated Marbletown Budgets 2016 - 2020</h2>
                    <p style={ {marginTop: '0', marginBottom: '0', fontSize: '0.75em'} }>This spreadsheet is complex because of the many mistakes found in published documents and multiple versions of the 2020 budget.
                        It took many hours to try to consolidate this data and present it as clearly as possible.  There is <strong>no guarantee</strong> this data is 100% accurate.
                    Please contact us if you see any errors, have any questions or input.</p>
                    <div id="budgetGrid" style={{height:'90vh',width: '90vw'}}  className="ag-theme-balham" >
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


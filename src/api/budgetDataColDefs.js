

//   see ag-grid/javascript-grid-column-spanning
//   for col spanning and style customization for comments row
var cellClassRules = {
    "comments-cell": 'data.section === "comments"'
};

function isCommentRow(params) {
    return params.data.section === "comments";
}

export const  columnDefs = [{
    headerName: "Restrict/Permit", field: "restriction", minWidth: 200, autoHeight: true,
    colSpan: function (params) {
        if (isCommentRow(params)){
            return 7;
        } else {
            return 1;
        }
    },
    cellClassRules: cellClassRules
}, {
    headerName: "Woodstock", field: "woodstock",

},{
    headerName: "Code", field: "woodstockCode"
},{
    headerName: "Marbletown", field: "marbletown"
},{
    headerName: "Code(proposed)", field: "marbletownCode"
},{
    headerName: "Rhinebeck", field: "rhinebeck"
},{
    headerName: "Rhinebeck Code", field: "rhinebeckCode"
}

];
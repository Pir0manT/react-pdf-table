"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
var React = require("react");
var renderer_1 = require("@react-pdf/renderer");
var Utils_1 = require("./Utils");
var TableRow = function (props) {
    var rowCells = React.Children.toArray(props.children);
    var _a = (0, Utils_1.getDefaultBorderIncludes)(props), includeLeftBorder = _a.includeLeftBorder, includeBottomBorder = _a.includeBottomBorder, includeRightBorder = _a.includeRightBorder, includeTopBorder = _a.includeTopBorder;
    var remainingWeighting = 1;
    var numberOfWeightingsDefined = 0;
    rowCells.forEach(function (i) {
        if (i.props.weighting !== undefined) {
            remainingWeighting -= i.props.weighting;
            numberOfWeightingsDefined++;
        }
    });
    var weightingsPerNotSpecified = Math.ceil(remainingWeighting / (rowCells.length - numberOfWeightingsDefined));
    var rowColor = ((props.zebra || props.evenRowColor) && props.even) ? props.evenRowColor || 'lightgray' : props.oddRowColor || '';
    return (React.createElement(renderer_1.View, { style: {
            borderBottom: includeBottomBorder === true ? "1pt solid black" : 0,
            borderRight: includeRightBorder === true ? "1pt solid black" : 0,
            borderLeft: includeLeftBorder === true ? "1pt solid black" : 0,
            borderTop: includeTopBorder === true ? "1pt solid black" : 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: rowColor,
        } }, rowCells.map(function (rc, columnIndex) { return React.cloneElement(rc, {
        weighting: rc.props.weighting || weightingsPerNotSpecified,
        data: props.data,
        key: columnIndex,
        fontSize: rc.props.fontSize || props.fontSize,
        textAlign: rc.props.textAlign || props.textAlign,
        includeLeftBorder: columnIndex === 0,
        includeRightBorder: columnIndex !== (rowCells.length - 1),
    }); })));
};
exports.TableRow = TableRow;
//# sourceMappingURL=TableRow.js.map
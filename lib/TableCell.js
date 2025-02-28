"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;
var React = require("react");
var renderer_1 = require("@react-pdf/renderer");
var Utils_1 = require("./Utils");
var TableCell = function (props) {
    var _a, _b, _c;
    var content = typeof props.children === "string"
        ? React.createElement(renderer_1.Text, null, props.children)
        : typeof props.children === "number"
            ? React.createElement(renderer_1.Text, null, props.children.toString())
            : props.children;
    var includeRightBorder = (0, Utils_1.getDefaultBorderIncludes)(props).includeRightBorder;
    var defaultStyle = {
        flex: (_a = props.weighting) !== null && _a !== void 0 ? _a : 1,
        justifyContent: "stretch",
        textAlign: (_b = props.textAlign) !== null && _b !== void 0 ? _b : "left",
        fontSize: (_c = props.fontSize) !== null && _c !== void 0 ? _c : (props.isHeader === true ? 14 : 12),
        borderRight: includeRightBorder === true ? "1pt solid black" : 0,
        wordWrap: "break-word",
        whiteSpace: "pre-wrap"
    };
    var mergedStyles = __spreadArray([
        defaultStyle
    ], (0, Utils_1.transformToArray)(props.style), true);
    return (React.createElement(renderer_1.View, { style: mergedStyles, wrap: true }, content));
};
exports.TableCell = TableCell;
//# sourceMappingURL=TableCell.js.map
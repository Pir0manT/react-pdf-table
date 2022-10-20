"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var React = require("react");
var TableHeader_1 = require("./TableHeader");
var TableBody_1 = require("./TableBody");
var renderer_1 = require("@react-pdf/renderer");
var TableCell_1 = require("./TableCell");
var TableRow_1 = require("./TableRow");
var DataTableCell_1 = require("./DataTableCell");
var Table = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var fragmentOrChildren = props.children;
    var tmp = typeof fragmentOrChildren === 'function'
        ? fragmentOrChildren({
            TableHeader: TableHeader_1.TableHeader,
            TableBody: TableBody_1.TableBody,
            TableRow: TableRow_1.TableRow,
            TableCell: TableCell_1.TableCell,
            DataTableCell: DataTableCell_1.DataTableCell,
        }).props.children
        : fragmentOrChildren;
    var children = React.Children.toArray(tmp);
    var tableHeader = children.find(function (e) { return e.type === TableHeader_1.TableHeader; });
    var tableBody = children.find(function (e) { return e.type === TableBody_1.TableBody; });
    var fallbackTableBody = React.cloneElement(tableBody, {
        data: (_c = (_b = (_a = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : props.data) !== null && _c !== void 0 ? _c : [],
        renderTopBorder: props.isNested ? false : !tableHeader,
        zebra: (_f = (_e = (_d = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _d === void 0 ? void 0 : _d.zebra) !== null && _e !== void 0 ? _e : props.zebra) !== null && _f !== void 0 ? _f : false,
        evenRowColor: (_j = (_h = (_g = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _g === void 0 ? void 0 : _g.evenRowColor) !== null && _h !== void 0 ? _h : props.evenRowColor) !== null && _j !== void 0 ? _j : '',
        oddRowColor: (_m = (_l = (_k = tableBody === null || tableBody === void 0 ? void 0 : tableBody.props) === null || _k === void 0 ? void 0 : _k.oddRowColor) !== null && _l !== void 0 ? _l : props.oddRowColor) !== null && _m !== void 0 ? _m : '',
    });
    return (React.createElement(renderer_1.View, { style: {
            width: "100%",
        } },
        tableHeader,
        fallbackTableBody));
};
exports.Table = Table;
//# sourceMappingURL=Table.js.map
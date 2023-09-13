"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
var React = require("react");
var Utils_1 = require("./Utils");
var TableRow_1 = require("./TableRow");
var TableHeader = function (props) {
    var _a = (0, Utils_1.getDefaultBorderIncludes)(props), includeLeftBorder = _a.includeLeftBorder, includeBottomBorder = _a.includeBottomBorder, includeRightBorder = _a.includeRightBorder, includeTopBorder = _a.includeTopBorder;
    var rowCells = React.Children.toArray(props.children);
    return (React.createElement(TableRow_1.TableRow, __assign({}, props, { key: "header", includeLeftBorder: includeLeftBorder, includeBottomBorder: includeBottomBorder, includeRightBorder: includeRightBorder, includeTopBorder: includeTopBorder }), rowCells.map(function (rc, columnIndex) { return React.cloneElement(rc, {
        key: columnIndex,
        isHeader: true,
        fontSize: rc.props.fontSize || props.fontSize,
        textAlign: rc.props.textAlign || props.textAlign,
        includeLeftBorder: (rc.props.includeLeftBorder === undefined || rc.props.includeLeftBorder) && includeLeftBorder && columnIndex === 0,
        includeRightBorder: (rc.props.includeRightBorder === undefined || rc.props.includeRightBorder) && includeRightBorder && columnIndex !== (rowCells.length - 1)
    }); })));
};
exports.TableHeader = TableHeader;
//# sourceMappingURL=TableHeader.js.map
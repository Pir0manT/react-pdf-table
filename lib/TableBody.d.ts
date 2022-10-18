import { TableRowProps } from "./TableRow";
import * as React from "react";
import { ZebraProps } from "./Table";
export interface TableBodyProps extends TableRowProps, Pick<ZebraProps, "zebra"> {
    data?: any[];
    renderTopBorder?: boolean;
}
export declare const TableBody: React.FC<TableBodyProps>;

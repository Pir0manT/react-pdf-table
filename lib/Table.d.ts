import * as React from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";
import { DataTableCell } from "./DataTableCell";
export interface ZebraProps {
    zebra?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
}
export interface TableProps<T> extends ZebraProps {
    data?: Array<T>;
    isNested?: boolean;
    children?: React.ReactNode | ((e: {
        TableHeader: typeof TableHeader;
        TableBody: typeof TableBody<T>;
        TableRow: typeof TableRow<T>;
        TableCell: typeof TableCell;
        DataTableCell: typeof DataTableCell<T>;
    }) => React.ReactFragment);
}
export declare const Table: <T>(props: TableProps<T>) => JSX.Element;

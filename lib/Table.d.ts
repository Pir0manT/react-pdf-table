import * as React from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
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
        DataTableCell: typeof DataTableCell<T>;
    }) => React.ReactNode);
}
export declare const Table: <T>(props: TableProps<T>) => JSX.Element;

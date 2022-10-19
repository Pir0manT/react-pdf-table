import * as React from "react";
import { TableCellProps } from "./TableCell";
export interface DataTableCellProps<T> extends TableCellProps {
    data?: T;
    getContent: (data: T) => React.ReactNode | JSX.Element | string | number;
}
export declare const DataTableCell: <T>(props: DataTableCellProps<T>) => JSX.Element;

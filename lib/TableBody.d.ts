/// <reference types="react" />
import { TableRowProps } from "./TableRow";
import { ZebraProps } from "./Table";
export interface TableBodyProps<T> extends Omit<TableRowProps<T>, 'data'>, Pick<ZebraProps, "zebra"> {
    data?: Array<T>;
    renderTopBorder?: boolean;
}
export declare const TableBody: <T>(props: TableBodyProps<T>) => JSX.Element;

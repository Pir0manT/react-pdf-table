import * as React from "react";
import { TableBorder } from "./TableCell";
export interface TableRowProps<T> extends TableBorder {
    fontSize?: number | string;
    textAlign?: "left" | "center" | "right";
    data?: T;
    zebra?: boolean;
    even?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
    children: React.ReactNode;
}
export declare const TableRow: <T>(props: Partial<TableRowProps<T>>) => JSX.Element;

import * as React from "react";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {View} from "@react-pdf/renderer";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";
import { DataTableCell } from "./DataTableCell";

export interface ZebraProps {
    /**
     * Whether to display alternate row colours.
     * Defaults to false.
     */
    zebra?: boolean;

    /**
     * The even row colour when {@see zebra} is true.
     * Defaults to lightgray if not defined.
     */
    evenRowColor?: string;

    /**
     * The odd row colour when {@see zebra} is true.
     * Defaults to transparent or '' if not defined.
     */
    oddRowColor?: string;
}

export interface TableProps<T> extends ZebraProps {
    /**
     * The table data to display.
     */
    data?: Array<T>;

    /**
     * Indicates that this is a nested table.
     * Otherwise assumed to be false.
     */
    isNested?: boolean;

    children?: React.ReactNode | ((e: { 
        TableHeader: typeof TableHeader;
        TableBody: typeof TableBody<T>;
        TableRow: typeof TableRow<T>;
        TableCell: typeof TableCell;
        DataTableCell: typeof DataTableCell<T>;
    }) => React.ReactFragment);
}

export const Table = <T,> (props: TableProps<T>) => {

    const fragmentOrChildren = props.children;
    const tmp = typeof fragmentOrChildren === 'function'
        ? (fragmentOrChildren({
                TableHeader,
                TableBody,
                TableRow,
                TableCell,
                DataTableCell,
            }) as any).props.children as React.ReactNode[]
        : fragmentOrChildren;

    const children = React.Children.toArray(tmp);
    const tableHeader = children.find((e: React.ReactElement) => e.type === TableHeader) as React.ReactElement;
    const tableBody = children.find((e: React.ReactElement) => e.type === TableBody) as React.ReactElement;

    const fallbackTableBody = React.cloneElement(tableBody, {
        data: tableBody?.props?.data as T[] ?? props.data ?? [],
        renderTopBorder: props.isNested ? false : !tableHeader,
        zebra: tableBody?.props?.zebra ?? props.zebra ?? false,
        evenRowColor: tableBody?.props?.evenRowColor ?? props.evenRowColor ?? '',
        oddRowColor: tableBody?.props?.oddRowColor ?? props.oddRowColor ?? '',
    });

    return (
        <View
            style={{
                width: "100%",
            }}
        >
            {tableHeader}
            {fallbackTableBody}
        </View>
    );
}

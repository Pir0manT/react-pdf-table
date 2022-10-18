import * as React from "react";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {View} from "@react-pdf/renderer";

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

export interface TableProps extends ZebraProps {
    /**
     * The table data to display.
     */
    data?: any[];

    /**
     * Indicates that this is a nested table.
     * Otherwise assumed to be false.
     */
    isNested?: boolean;

    children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = (props) => {

    const children = React.Children.toArray(props.children);
    const tableHeader = children.find((e: React.ReactElement) => e.type === TableHeader) as React.ReactElement;
    const tableBody = children.find((e: React.ReactElement) => e.type === TableBody) as React.ReactElement;

    const fallbackTableBody = React.cloneElement(tableBody, {
        data: tableBody?.props?.data ?? props.data ?? [],
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

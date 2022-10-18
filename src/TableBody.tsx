import {TableRow, TableRowProps} from "./TableRow";
import * as React from "react";
import {getDefaultBorderIncludes} from "./Utils";
import {ZebraProps} from "./Table";

export interface TableBodyProps extends TableRowProps, Pick<ZebraProps, "zebra"> {
    /**
     * The data associated with the table.
     */
    data?: any[];

    /**
     * Allows control of the very top border of the TableBody to be toggled on and off
     * if there is no header.
     */
    renderTopBorder?: boolean
}

/**
 * This component displays the data as {@see TableRow}s.
 */
export const TableBody: React.FC<TableBodyProps> = (props) => {
    const rowCells = React.Children.toArray(props.children);
    const {includeLeftBorder, includeBottomBorder, includeRightBorder} = getDefaultBorderIncludes(props);
    const dataRows = props.data ?? [];

    return (
        <>
            {(dataRows).map((data, rowIndex) => (
                <TableRow
                    {...props}
                    key={rowIndex}
                    even={rowIndex % 2 === 0}
                    data={data}
                    includeLeftBorder={includeLeftBorder}
                    includeBottomBorder={includeBottomBorder}
                    includeRightBorder={includeRightBorder}
                    includeTopBorder={props.renderTopBorder ?? false}
                >
                    {rowCells}
                </TableRow>
            ))}
        </>
    );
}

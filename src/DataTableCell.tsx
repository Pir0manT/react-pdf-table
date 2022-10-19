import * as React from "react";
import {TableCell, TableCellProps} from "./TableCell";

export interface DataTableCellProps<T> extends TableCellProps {
    /**
     * The data associated with the cell.
     */
    data?: T;

    /**
     * The content to display for this cell.
     * @param data the data passed in.
     */
    getContent: (data: T) => React.ReactNode | JSX.Element | string | number;
}

/**
 * This component is used to display data in the the {@see TableRow} component.
 */
export const DataTableCell = <T,>(props: DataTableCellProps<T>) => {
    return (
        <TableCell {...props}>
            {props.getContent(props.data)}
        </TableCell>
    )
}

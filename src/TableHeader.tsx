import * as React from "react";
import {getDefaultBorderIncludes} from "./Utils";
import {TableRow, TableRowProps} from "./TableRow";

export interface TableHeaderProps extends TableRowProps {
}

/**
 * This component displays the titles for the rows.
 */
export const TableHeader : React.FC<TableHeaderProps> = (props) => {
    let {includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder} = getDefaultBorderIncludes(props);

    const rowCells: any[] = React.Children.toArray(props.children);

    return (
        <TableRow
            {...props}
            key={"header"}
            includeLeftBorder={includeLeftBorder}
            includeBottomBorder={includeBottomBorder}
            includeRightBorder={includeRightBorder}
            includeTopBorder={includeTopBorder}
        >
            {
                rowCells.map((rc, columnIndex) => React.cloneElement(rc, {
                    key: columnIndex,
                    isHeader: true,
                    fontSize: rc.props.fontSize || props.fontSize,
                    textAlign: rc.props.textAlign || props.textAlign,
                    includeLeftBorder: !!rc.props.includeLeftBorder && includeLeftBorder && columnIndex === 0,
                    includeRightBorder: !!rc.props.includeRightBorder && includeRightBorder && columnIndex !== (rowCells.length - 1)
                }))
            }
        </TableRow>
    );
}

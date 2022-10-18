import * as React from "react";
import {TableBorder, TableCell} from "./TableCell";
import {DataTableCell} from "./DataTableCell";
import {View} from "@react-pdf/renderer";
import {getDefaultBorderIncludes} from "./Utils";
import {TableBodyProps} from "./TableBody";

export interface TableRowProps extends TableBorder {
    /**
     * The font size as a valid unit defined in react-pdf.
     */
    fontSize?: number | string;

    /**
     * Whether to align the text. Defaults to left.
     */
    textAlign?: "left" | "center" | "right";

    /**
     * Any data associated, relevant if the parent is a {@see DataTableCell}.
     */
    data?: any;

    /**
     * Whether rows have alternating styles
     */
    zebra?: boolean;

    /**
     * Whether this row is even (true) or odd (false)
     */
    even?: boolean;

    /**
     * Specify the color of even rows
     */
    evenRowColor?: string;

    /**
     * Specify the color of odd rows
     */
    oddRowColor?: string;

    /**
     * fix 'Property children does not exists on type ... ts(2339)'
     */
    children: React.ReactNode;
}

/**
 * This component describes how to display a row.
 */
export const TableRow: React.FC<Partial<TableBodyProps>> = (props) => {
  const rowCells: any[] = React.Children.toArray(props.children);
  const {includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder} = getDefaultBorderIncludes(props);

  let remainingWeighting = 1;
  let numberOfWeightingsDefined = 0;
  rowCells.forEach((i: ReturnType<typeof TableCell> | ReturnType<typeof DataTableCell>) => {
    if (i.props.weighting !== undefined) {
      remainingWeighting -= i.props.weighting;
      numberOfWeightingsDefined++;
    }
  });

  const weightingsPerNotSpecified = Math.ceil(remainingWeighting / (rowCells.length - numberOfWeightingsDefined));

  const rowColor = ((props.zebra || props.evenRowColor) && props.even) ? props.evenRowColor || 'lightgray' : props.oddRowColor || '';

  return (
      <View
        style={{
          borderBottom: includeBottomBorder === true ? "1pt solid black" : 0,
          borderRight: includeRightBorder === true ? "1pt solid black" : 0,
          borderLeft: includeLeftBorder === true ? "1pt solid black" : 0,
          borderTop: includeTopBorder === true ? "1pt solid black" : 0,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: rowColor,
        }}
      >
          {
            rowCells.map((rc, columnIndex) => React.cloneElement(rc, {
              weighting: rc.props.weighting ?? weightingsPerNotSpecified,
              data: props.data,
              key: columnIndex,
              fontSize: props.fontSize,
              textAlign: props.textAlign,
              includeLeftBorder: columnIndex === 0,
              includeRightBorder: includeRightBorder && columnIndex !== (rowCells.length - 1)
            }))
          }
      </View>
  );
}

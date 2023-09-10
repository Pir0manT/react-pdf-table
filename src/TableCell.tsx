import * as React from "react";
import ReactPDF, {Text, View} from "@react-pdf/renderer";
import {getDefaultBorderIncludes, transformToArray} from "./Utils";

/**
 * Whether to include borders or not.
 * Depending on the context some toggles will not have any effect.
 */
export interface TableBorder {
    /**
     * Include the top border. Default true.
     */
    includeTopBorder?: boolean;

    /**
     * Include the right border. Default true.
     */
    includeRightBorder?: boolean;

    /**
     * Include the bottom border. Default true.
     */
    includeBottomBorder?: boolean;

    /**
     * Include the left border. Default true.
     */
    includeLeftBorder?: boolean;
}

export interface TableCellProps extends TableBorder {
    /**
     * The weighting of a cell based on the flex layout style.
     * This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.
     */
    weighting?: number;

    /**
     * Extra styling to apply. These will override existing style with the same key.
     */
    style?: ReactPDF.Style | ReactPDF.Style[];

    /**
     * How to align the text
     */
    textAlign?: "left" | "center" | "right";

    /**
     * Whether this is a header cell or not. If not defined it will be false.
     */
    isHeader?: boolean;

    /**
     * The font-size to apply to the cell.
     */
    fontSize?: number | string;

    children?: React.ReactNode;
}

/**
 * This component displays the associated content of it's children.
 */
export const TableCell: React.FC<TableCellProps> = (props) => {
    const content = typeof props.children === "string"
        ?  <Text>{props.children}</Text>
        : typeof props.children === "number"
        ?  <Text>{props.children.toString()}</Text>
        : props.children;

    const {includeRightBorder} = getDefaultBorderIncludes(props);

    console.log('props: ', props)
    console.log('right border: ', includeRightBorder)

    const defaultStyle: ReactPDF.Style = {
        flex: props.weighting ?? 1,
        // @ts-ignore
        justifyContent: "stretch",
        textAlign: props.textAlign ?? "left",
        fontSize: props.fontSize ?? (props.isHeader === true ? 14 : 12),
        borderRight: includeRightBorder === true ? "1pt solid black" : 0,
        wordWrap: "break-word",
        whiteSpace: "pre-wrap"
    };

    const mergedStyles: ReactPDF.Style[] = [
        defaultStyle,
        ...transformToArray(props.style)
    ];

    return (
        <View
            style={mergedStyles}
            wrap={true}
        >
            {content}
        </View>
    );
}

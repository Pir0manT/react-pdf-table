import * as React from "react";
export interface ZebraProps {
    zebra?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
}
export interface TableProps extends ZebraProps {
    data?: any[];
    isNested?: boolean;
    children?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;

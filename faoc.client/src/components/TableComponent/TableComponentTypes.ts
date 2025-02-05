import { ReactNode } from "react";
import { TableRecordModel } from "../../views/HomeView/HomeView";

export interface TableComponentProps {
    tableItems: TableRecordModel[];
    tableHeaders: string[];
    children?: ReactNode;
    useChildrenContent?: boolean;
    onAddRecord: (newRecord: TableRecordModel[]) => void;
}

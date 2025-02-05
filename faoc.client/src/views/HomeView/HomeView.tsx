import { useState } from "react";
import TableComponent from "../../components/TableComponent/TableComponent";

export interface TableRecordModel {
    name: string;
    id: number;
    amount: number;
    profit: number;
}

export default function HomeView() {
    const [tableData, setTableData] = useState<TableRecordModel[]>([
        { name: "Alice", id: 1, amount: 500, profit: 50 },
        { name: "Bob", id: 2, amount: 300, profit: 30 },
        { name: "Charlie", id: 3, amount: 700, profit: 70 },
        { name: "Diana", id: 4, amount: 400, profit: 40 },
        { name: "Eve", id: 5, amount: 600, profit: 60 },
    ]);
    const tableHeaders = ["name", "id", "amount", "profit", "options"];

    return (
        <div className="container-lg">
            Home agaes
            <TableComponent
                tableHeaders={tableHeaders}
                tableItems={tableData}
                onAddRecord={setTableData}
            >
                abc
            </TableComponent>
        </div>
    );
}

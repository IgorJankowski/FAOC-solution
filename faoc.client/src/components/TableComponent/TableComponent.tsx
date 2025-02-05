import { TableComponentProps } from "./TableComponentTypes";
import { useState } from "react";
import AddStockModal from "../../modals/AddStockModal/AddStockModal";
import { TableRecordModel } from "../../views/HomeView/HomeView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TableComponent({
    tableItems,
    tableHeaders,
    children,
    useChildrenContent = false,
    onAddRecord,
}: TableComponentProps) {
    const [showModal, setShowModal] = useState(false);
    const handleNewRecord = (newRecord: TableRecordModel) => {
        onAddRecord([...tableItems, newRecord]);
    };

    const deleteRow = (id: number) => {
        onAddRecord([...tableItems.filter((x) => x.id !== id)]);
    };

    return (
        <div className="d-flex flex-column align-items-end">
            <table className="table table-striped table-hover table-bordered no-top-border w-100 mb-1">
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th
                                className="no-top-border"
                                key={`${header}-${index}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children && useChildrenContent
                        ? children
                        : tableItems.map((item, rowIndex) => (
                              <tr key={rowIndex}>
                                  {Object.entries(item).map(([key, value]) => (
                                      <td key={key}>{value}</td>
                                  ))}
                                  <td>
                                      <button
                                          onClick={() => deleteRow(item.id)}
                                          style={{
                                              border: "none",
                                              background: "transparent",
                                              cursor: "pointer",
                                          }}
                                      >
                                          <FontAwesomeIcon
                                              icon={faTrash}
                                              style={{
                                                  color: "red",
                                                  fontSize: "20px",
                                              }}
                                          />
                                      </button>
                                  </td>
                              </tr>
                          ))}
                </tbody>
            </table>
            <button
                className="btn btn-primary col-2"
                onClick={() => setShowModal(true)}
            >
                Add
            </button>
            {showModal && (
                <AddStockModal
                    onSave={(newRecord: TableRecordModel) => {
                        handleNewRecord(newRecord);
                        setShowModal(false);
                    }}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

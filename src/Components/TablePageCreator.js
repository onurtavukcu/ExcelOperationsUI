import React, { useEffect, useState } from "react";
import "../App.css";
import "../";
import LeftSideBar from "./LeftSideBar";
import ExcelTable from "./ExcelTable";
import "./Table.css";

export default function TablePageCreator() {
  const [tableData, setTableData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    // const array = [];

    if (tableData.length > 0) {
      const headersData = Object.keys(tableData[0]).map((item) => {
        return { name: item, sortable: true };
      });

      setHeaders(headersData);
    }
  }, [tableData]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app">
      <LeftSideBar onItemClick={handleItemClick} changeData={setTableData} />
      <div className="main-content">
        <div className="ReactTable">
          <ExcelTable
            data={tableData}
            searchable={true}
            head={headers}
            body={
              tableData.length > 0 &&
              tableData.map((row) => {
                // const array = [];
                return Object.values(row).map((item) => {
                  return item;
                });

                // return array;
              })
            }
          />
          <div>
            <h1>{selectedItem}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

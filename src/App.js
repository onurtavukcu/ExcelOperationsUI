import "./App.css";
import "./";
import "./Components/Table.css";
import { useEffect, useState } from "react";
import LeftSideBar from "./Components/LeftSideBar";
import ExcelTable from "./Components/ExcelTable";
import * as React from "react";

function App() {
  const [tableData, setTableData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
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

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" component={<Apps />}></Route>
//           <Route path="/about" component={<LoginPage />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;

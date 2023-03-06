import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FillTable from './FillTheTable';
import { useState } from 'react';

function App() {

//   const [tableData, SetTableData] = useState("");
  
//   const TestGetData = async () => {
//     await fetch("https://localhost:7005/ExcelOperationsEndPoints/GetSomeData",
//       {
//         method: 'GET'
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => SetTableData(data))
//     .catch(error => console.error(error));
// };

return (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    {/* btn.onClick = {TestGetData()} */}
    <button onClick={TestGetData.TestGetDatas}> Click meee
    </button>
    {tableData.length>0 &&
    <FillTable data={tableData}/>}
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer">Learn React
    </a>
  </div>
);
}

export default App;

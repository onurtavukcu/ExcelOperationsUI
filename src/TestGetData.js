import { useState } from "react";

function TestGetDatas()
{
  const [tableData, SetTableData] = useState("");

  const TestGetDatas = async () => {
    await fetch("https://localhost:7005/ExcelOperationsEndPoints/GetSomeData",
      {
        method: 'GET'
      }
    )
      .then((res) => res.json())
      .then((data) => SetTableData(data))
    .catch(error => console.error(error));
  };

  return tableData;
}
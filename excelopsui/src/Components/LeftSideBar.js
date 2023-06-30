import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LeftSideBar(props) {
  const [datas, setData] = useState([]);
  //const [post, setPost] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5005/ExcelOperationsEndPoints/GetSomeDataV2")
  //     .then((resp) => {
  //       setPost(resp.data);
  //     });
  // }, []);

  const apisUrl = [
    "http://localhost:5005/ExcelOperationsEndPoints/GetSomeDataV2",
    "http://localhost:5005/ExcelOperationsEndPoints/GetSomeDataV3",
    "http://localhost:5005/ExcelOperationsEndPoints/GetSomeDataV4",
    "http://localhost:5005/ExcelOperationsEndPoints/GetSomeDataV5",
    "http://localhost:5005/login",
  ];

  const handleItemClick1 = (url) => {
    axios
      .get(url)
      .then((data) => {
        const result = data.data;
        // console.log(result);
        // setData(result);
        props.changeData(result);
      })
      .catch((error) => console.error(error));
  };

  const navigate = useNavigate();

  function loginButton() {
    navigate("/login");

    // axios
    //   .get(url)
    //   .then((data) => {
    //     const result = data.data;
    //     // console.log(result);
    //     // setData(result);
    //     props.changeData(result);
    //   })
    //   .catch((error) => console.error(error));
  }

  return (
    <div className="sidebar">
      <div className="title">NE_Nr == "203792153"</div>
      <button
        className="sidebar-item"
        onClick={() => handleItemClick1(apisUrl[0])}
      >
        Multi Project
      </button>
      <div className="title">PR_NO == "3611248906"</div>
      <button
        className="sidebar-item"
        onClick={() => handleItemClick1(apisUrl[1])}
      >
        Deltatel_PO
      </button>
      <div className="title">Ort == "Hamburg"</div>
      <button
        className="sidebar-item"
        onClick={() => handleItemClick1(apisUrl[2])}
      >
        Router Aktuell
      </button>
      <div className="title">Projektart == "Aufbau"</div>
      <button
        className="sidebar-item"
        onClick={() => handleItemClick1(apisUrl[3])}
      >
        XWDM Aktuells
      </button>
      <button className="sidebar-item" onClick={() => loginButton()}>
        Login
      </button>
      <div>{datas}</div>
    </div>
  );
}

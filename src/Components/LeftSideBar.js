import { useNavigate } from "react-router";
import { commonServiceModule } from "../Services/CommonService";

export default function LeftSideBar(props) {
  const handleItemClick = () => {
    commonServiceModule.getRouterAktuell().then((response) => {
      props.changeData(response);
    });
  };

  const handleItemClick1 = () => {
    commonServiceModule.getZugangsdatenAktuell().then((response) => {
      props.changeData(response);
    });
  };

  const navigate = useNavigate();

  function loginButton() {
    navigate("/login");
  }

  function MapsButton() {
    navigate("/maps");
  }

  return (
    <div className="sidebar">
      <div className="title">NE_Nr == "203792153"</div>
      <button className="sidebar-item" onClick={() => handleItemClick()}>
        Multi Project
      </button>
      <div className="title">PR_NO == "3611248906"</div>
      <button className="sidebar-item" onClick={() => handleItemClick1()}>
        Deltatel_PO
      </button>
      <div className="title">Ort == "Hamburg"</div>
      <button className="sidebar-item" onClick={() => handleItemClick1()}>
        Router Aktuell
      </button>
      <div className="title">Projektart == "Aufbau"</div>
      <button className="sidebar-item" onClick={() => handleItemClick1()}>
        XWDM Aktuells
      </button>
      <button className="sidebar-item" onClick={() => loginButton()}>
        Login
      </button>
      <button className="sidebar-item" onClick={() => MapsButton()}>
        Maps
      </button>
    </div>
  );
}

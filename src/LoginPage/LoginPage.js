import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { commonServiceModule } from "../Services/CommonService";

const LoginPage = () => {
  const [usernames, setUserName] = useState("");
  const [passwords, setPassword] = useState("");

  const navigate = useNavigate();
  const navigates = useNavigate();

  function HomePage() {
    navigate("/");
  }

  function ErrorPage() {
    navigates("/errorpage");
  }

  const authenticate = () => {
    const data = {
      Username: usernames,
      Password: passwords,
    };

    // commonServiceModule
    //   .authenticateReq()
    //   .then((response) => {
    //     if (response.status === 200) {
    //       localStorage.setItem("token", response.data); //save token to local storage
    //       //window.location.href = "/";
    //       HomePage();
    //     } else if (response.status === 401 || response.status === 400) {
    //       //window.location.href = "/errorpage";
    //       ErrorPage();
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response.status === 401 || error.response.status === 400) {
    //       //window.location.href = "/errorpage";
    //       ErrorPage();
    //     } else {
    //       console.error(error);
    //     }
    //   });

    axios
      .post("http://localhost:5005/Authenticate", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data); //save token to local storage
          //window.location.href = "/";
          HomePage();
        } else if (response.status === 401 || response.status === 400) {
          //window.location.href = "/errorpage";
          ErrorPage();
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 400) {
          //window.location.href = "/errorpage";
          // ErrorPage();
          alert("Please check your auth info!");
        } else {
          console.error(error);
        }
      });
  };

  return (
    <div className="loginpage">
      <h1>Please Log In</h1>
      <label>
        <p>Username</p>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button className="submit" onClick={() => authenticate()}>
          Submitss
        </button>
      </div>
    </div>
  );
};
export default LoginPage;

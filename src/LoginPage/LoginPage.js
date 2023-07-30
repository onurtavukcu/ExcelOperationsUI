import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Cookies } from "react-cookie";

const LoginPage = () => {
  const [usernames, setUserName] = useState("");
  const [passwords, setPassword] = useState("");
  //const [cookie, setCookie] = useState("");
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
      userName: usernames,
      password: passwords,
    };

    axios
      .post("http://localhost:5005/ExcelOperationsEndPoints/Authenticate", data)
      .then((response) => {
        console.log(response.data === true);
        if (response.status === 200) {
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
          ErrorPage();
        } else {
          console.error(error);
        }
      });
  };

  // useEffect(() => {
  //   setCookies();
  //   if (cookie != null) {
  //     console.log("gavatssas");
  //   }
  // });

  // async function setCookies() {
  //   // const authResponse = await authenticate();

  //   // if (authResponse != null) {
  //   setCookie(Cookies.get("username"));

  //   Cookies.set("username", usernames, { expires: 7 });
  //   Cookies.set("password", passwords, { expires: 7 });
  //   console.log(Cookies.get("username"));
  //   // }
  // }

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

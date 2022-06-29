
import React from "react";
import {  useState } from "react";
import { auth, getSession } from "../api/auth";

import App from '../App';
import logo from './img/logo192.png';

export default function Navbar() {
  const namaaps = <a className="navbar-brand " href="/" aria-label="App Title">Instagram faiz</a>


  const [masuk, setMasuk] = useState(false);
  const [user, setUser] = useState({});

  const ceklogin = async () => {
    const session = await getSession();
    if (session) {
      setMasuk(true);
    }
    else
    {
      setMasuk(false);
    }
  };

  React.useEffect(() => {
    ceklogin();
  }, []);


  // TODO: answer here
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light " aria-label="Navbar">
    <div className="container-fluid">
      <img src={logo} alt="Logo" width="50px" height="50" aria-label="App Logo" />
      {/* <App /> */}
      <div aria-label="App">{namaaps}</div>
      {
        masuk ?
        <a className="btn btn-primary" aria-label="Profile" href="/profile">Profile John Doe</a>
        :
        <button type="submit" className="btn btn-primary" aria-label="Login" onClick={() => {
          auth();
        }
        }>Login</button>
      }
      
    </div>
  </nav>
  </>
}

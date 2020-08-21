import React from "react";
import "../css/common.css";

function LogIn() {
  return (
    <div className="container-full">
      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>
      <div className="bg-circle-3"></div>
      <div className="bg-circle-4"></div>
      <div className="container col-6 fixed-top shadow mt-5 h-75 mb-4 bg-white">
        <h1 className="mt-4 ml-4">Login</h1>
        <form className="text-center">
          <ul className="list-group-flush mt-5">
            <li className="list-group-item">User Name:</li>
            <input type="text" name="username" />
            <li className="list-group-item">Password:</li>
            <input type="text" name="password" />
          </ul>
        </form>
        <div className="text-center">
          <button className="btn btn-secondary font-weight-bold btn-login">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

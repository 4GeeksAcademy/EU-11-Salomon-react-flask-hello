import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Signup } from "./signup";
import { Login } from "./login";

export const User = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Signup />
        </div>
        <div className="col-6">
          <Login />
        </div>
      </div>
    </div>
  );
};
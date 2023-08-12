import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Signup } from "./signup";
import { Login } from "./login";

export const Private = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <h1>Your registration was a success!!</h1>
          <p>Now, please confirm your email directly on your inbox and proceed to sign in :) </p>
        </div>
      </div>
    </div>
  );
};
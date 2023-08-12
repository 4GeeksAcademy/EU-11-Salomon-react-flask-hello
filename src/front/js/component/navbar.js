import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import jwtImage from "../../img/jwtimg.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

const navigate = useNavigate();

  const isAuthenticate = () => {
    if (store.auth) {
      navigate("/userArea");
    } else {
      navigate("/user");
    }
  };

  return (
    <nav className="navbar d-flex justify-content-around align-items-center px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <span className="logo">
            <img
              src={jwtImage}
              className="img-logo"
              alt="logo"
              width="70"
              height="70"
            />
          </span>
        </Link>
        <div className="icons d-flex justify-content-around align-items-center">
          {store.auth ? <div><h5 className="title2  mb-5">Hi {store.user}</h5></div> : ""}

          {store.auth ? (
            <button
              className="logout border-0 bg-white"
              onClick={() => {
                actions.logout();
                navigate("/");
              }}
            >
              <i className="fas fa-user-times "></i>
            </button>
          ) : (
            <button
              className="loging border-0 bg-white"
              onClick={() => {
                isAuthenticate();
              }}
            >
              <i className="icon far fa-user me-2 text-black"></i>
            </button>
          )}

        </div>
      </div>
    </nav>
  );
};

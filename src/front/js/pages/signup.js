import React, { useState, useEffect } from "react";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const sendInfo = (event) => {
    event.preventDefault();
    console.log(info);
    addInfo(info);
    navigate("/private");
  };

  //llamada fetch api
  const addInfo = (info) => {
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json(); // will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="registration col-12 mb-3 mt-5 text-center">
        <h2>Register</h2>
        <p>
          Join this amazing website!!
        </p>
      </div>
      <div className="row">
        <form className="form" onSubmit={sendInfo} id="registration">
          <div className="col-12 mb-3 mt-4 text-center">
            <input
              className="input-reg"
              name="Nombre"
              placeholder=" Name"
              autoComplete="off"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12  mb-3 text-center">
            <input
              className="input-reg"
              name="Apellido"
              placeholder=" Last Name"
              autoComplete="off"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12 mb-3 text-center">
            <input
              className="input-reg"
              name="email"
              placeholder=" Email"
              autoComplete="off"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12  mb-5 text-center">
            <input
              className="input-reg"
              name="Contraseña"
              placeholder=" Password"
              autoComplete="off"
              type="Contraseña"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12  mb-3 text-center">
            <button className="send" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
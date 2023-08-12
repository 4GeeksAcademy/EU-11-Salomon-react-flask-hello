import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  console.log("this is your token", store.token);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await actions.login(email, password);
    console.log(result);
    if (result) {
      navigate("/userArea");
    } else {
      setError("Email or password incorrect");
    }
  };

  return (
    <div className="col-12 text-center mt-5">
      <h2>Access</h2>
      {error ? <h1>{error}</h1> : ""}
      <div>
        <div className="row">
          <form onSubmit={handleSubmit} className="form" id="registration">
            <div className="col-12 text-center mt-4 mb-3">
              <input
                className="input-reg"
                name="email"
                value={email}
                placeholder=" Email"
                autoComplete="off"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-12 text-center mb-5">
              <input
                className="input-reg"
                name="Password"
                value={password}
                placeholder=" Password"
                autoComplete="off"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-12 text-center mb-3">
              <button className="login">Access</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import { Context } from "../store/appContext";


export const UserArea = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-3 pt-3">
                    <h4 className="user-name text-center">Hi, {store.user}!! </h4>
                    <p className="user-mail text-center"> {store.mail} </p>
                    <div className="d-flex justify-content-center">Keep it up! :) </div>
                </div>
            </div>
        </div>
    );
};
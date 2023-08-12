import React, { useContext } from "react";
import { Context } from "../store/appContext";
import jwtImage from "../../img/jwtimg.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>This is a project performed to improve my JSON Web Tokens skills!!</h1>
			<p>
				<img src={jwtImage} />
			</p>
			<p>
				If you would like to know more information about JWT here you have some information:{" "}
				<a href="https://jwt.io/introduction">
						Introduction to JSON Web Tokens
				</a>
			</p>
		</div>
	);
};

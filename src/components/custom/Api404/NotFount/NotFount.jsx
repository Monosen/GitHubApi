import React from "react";
import { Link } from "react-router-dom";

//img
import X from "../../../../img/X.png";

const NotFount = ({ message }) => {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<img src={X} alt={message} />
			<h1 className="mt-3 text-3xl">{message}</h1>
			<Link
				className="p-3 border-2 mt-5 block hover:bg-black hover:text-white"
				to={"/"}
			>
				Home
			</Link>
		</div>
	);
};

export default NotFount;

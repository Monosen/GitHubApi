import React from "react";
import { Link } from "react-router-dom";

const PageError = () => {
	return (
		<div className="h-screen flex justify-center items-center flex-col">
			<h1 className="text-9xl font-bold">404</h1>
			<h3 className="text-3xl mt-5 font-semibold">Not Fount</h3>
			<p className="capitalize mt-5">
				the resource requested could not be found on this server
			</p>
			<Link
				className="capitalize border p-3 mt-4 hover:bg-black hover:text-white"
				to={"/"}
			>
				go back home
			</Link>
		</div>
	);
};

export default PageError;

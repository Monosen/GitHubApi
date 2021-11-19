import React from "react";
import { Link } from "react-router-dom";

const CardFollowers = ({ name, avatar, github }) => {
	return (
		<div className="container sm:w-5/12 lg:w-3/12 xl:w-96 text-center shadow-md border rounded-md px-4 py-5 m-4">
			<a href={github}>
				<img
					className="rounded-full h-24 w-24 flex items-center justify-center m-auto"
					src={avatar}
					alt={name}
				/>
			</a>
			<h2>{name}</h2>

			<Link
				className="p-3 border-2 mt-5 block hover:bg-black hover:text-white"
				to={`/repositories/${name}`}
			>
				Repositories
			</Link>
		</div>
	);
};

export default CardFollowers;

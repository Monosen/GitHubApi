import React from "react";
import { Link } from "react-router-dom";

const CardGithub = (props) => {
	const {
		avatar,
		name,
		github,
		github_name,
		public_repos,
		followers,
		following,
	} = props;
	return (
		<div className="w-96 text-center shadow-md border rounded-md px-4 py-5">
			<a href={github}>
				<img
					className="rounded-full h-24 w-24 flex items-center justify-center m-auto"
					src={avatar}
					alt={name}
				/>
			</a>
			<h2>{name}</h2>
			<h3>{github_name}</h3>

			<div className="mt-3 flex justify-between text-center">
				<p>
					<span className="text-xl font-bold block">Repositories:</span>
					<span>{public_repos}</span>
				</p>
				<p>
					<Link to={`/followers/${github_name}`}>
						<span className="text-xl font-bold block">Followers:</span>
						<span>{followers}</span>
					</Link>
				</p>
				<p>
					<span className="text-xl font-bold block">Following:</span>
					<span>{following}</span>
				</p>
			</div>
			<Link
				className="p-3 border-2 mt-5 block hover:bg-black hover:text-white"
				to={`/repositories/${github_name}`}
			>
				Repositories
			</Link>
		</div>
	);
};

export default CardGithub;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import CardRepos from "../../components/PageRepos/CardRepos";
import NotFount from "../../components/custom/Api404/NotFount/NotFount";

const PageRepos = () => {
	const [AllReposGitHub, setAllReposGitHub] = useState([]);
	const { code } = useParams();

	useEffect(() => {
		const handlefetchData = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${code}/repos`
				);
				const result = await response.json();
				setAllReposGitHub(result);
			} catch (error) {
				console.log(error);
			}
		};
		handlefetchData();
	}, [code]);

	return (
		<div className="flex flex-wrap justify-center">
			{AllReposGitHub?.length > 0 ? (
				AllReposGitHub.map((repo) => (
					<CardRepos
						key={repo.id}
						name={repo.name}
						language={repo.language}
						visibility={repo.visibility}
						url={repo.html_url}
						forks={repo.forks}
					/>
				))
			) : AllReposGitHub.message ? (
				<NotFount message={AllReposGitHub.message} />
			) : (
				AllReposGitHub?.length === 0 && (
					<div className="h-screen flex justify-center items-center text-3xl">
						<h1>No Repositories</h1>
					</div>
				)
			)}
		</div>
	);
};

export default PageRepos;

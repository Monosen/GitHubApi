import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Componentes
import CardFollowers from "../../components/PageFollowers/CardFollowers";
import NotFount from "../../components/custom/Api404/NotFount/NotFount";

//Styles
import "./PageFollowers.styles.css";

const PageFollowers = () => {
	const [AllFollwersGitHub, setAllFollwersGitHub] = useState([]);
	const { code } = useParams();

	useEffect(() => {
		const handlefetchData = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${code}/followers`
				);
				const result = await response.json();
				setAllFollwersGitHub(result);
			} catch (error) {
				console.log(error);
			}
		};
		handlefetchData();
	}, [code]);

	return (
		<div className="boxCards flex flex-wrap justify-center mx-auto">
			{AllFollwersGitHub?.length > 0 ? (
				AllFollwersGitHub?.map((followers) => (
					<CardFollowers
						key={followers.id}
						name={followers.login}
						avatar={followers.avatar_url}
						github={followers.html_url}
					/>
				))
			) : AllFollwersGitHub?.message ? (
				<NotFount message={AllFollwersGitHub.message} />
			) : (
				AllFollwersGitHub?.length === 0 && (
					<div className="h-screen flex justify-center items-center text-3xl">
						<h1>No Foollowers</h1>
					</div>
				)
			)}
		</div>
	);
};

export default PageFollowers;

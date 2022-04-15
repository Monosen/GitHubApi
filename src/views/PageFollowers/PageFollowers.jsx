import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Componentes
import CardFollowers from '../../components/PageFollowers/CardFollowers'
import NotFount from '../../components/custom/Api404/NotFount/NotFount'
import Loader from '../../components/Loader/Loader'

const PageFollowers = () => {
	const [loader, setLoader] = useState(true)
	const [AllFollwersGitHub, setAllFollwersGitHub] = useState([])
	const { code } = useParams()

	useEffect(() => {
		const handlefetchData = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${code}/followers`
				)
				const result = await response.json()
				setAllFollwersGitHub(result)
				setLoader(false)
			} catch (error) {
				console.log(error)
			}
		}
		handlefetchData()
	}, [code])

	return (
		<main className='flex flex-wrap justify-center mx-auto bg-blue-200'>
			{loader && (
				<div className='flex items-center justify-center h-screen text-3xl'>
					<Loader />
				</div>
			)}
			{AllFollwersGitHub?.length > 0 ? (
				AllFollwersGitHub?.map(followers => (
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
				AllFollwersGitHub?.length === 0 &&
				!loader && (
					<div className='flex items-center justify-center h-screen text-3xl text-white'>
						<h1>No Foollowers</h1>
					</div>
				)
			)}
		</main>
	)
}

export default PageFollowers

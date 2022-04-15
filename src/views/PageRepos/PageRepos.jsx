import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import CardRepos from '../../components/PageRepos/CardRepos'
import NotFount from '../../components/custom/Api404/NotFount/NotFount'
import Loader from '../../components/Loader/Loader'

const PageRepos = () => {
	const [loader, setLoader] = useState(true)
	const [AllReposGitHub, setAllReposGitHub] = useState([])
	const { code } = useParams()

	useEffect(() => {
		const handlefetchData = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${code}/repos`
				)
				const result = await response.json()
				setAllReposGitHub(result)
				setLoader(false)
			} catch (error) {
				console.log(error)
			}
		}
		handlefetchData()
	}, [code])

	return (
		<div className='flex flex-wrap justify-center bg-blue-200'>
			{loader && (
				<div className='flex items-center justify-center h-screen text-3xl'>
					<Loader />
				</div>
			)}
			{AllReposGitHub?.length > 0 ? (
				AllReposGitHub.map(repo => (
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
				AllReposGitHub?.length === 0 &&
				!loader && (
					<div className='flex items-center justify-center h-screen text-3xl text-white'>
						<h1>No Repositories</h1>
					</div>
				)
			)}
		</div>
	)
}

export default PageRepos

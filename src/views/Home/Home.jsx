import { useState } from 'react'

// Components
import SearchGitHub from '../../components/Home/SearchGitHub'
import CardGithub from '../../components/Home/CardGithub'
import Loader from '../../components/Loader/Loader'

const Home = () => {
	const [userName, setUserName] = useState('')
	const [allGithub, setAllGithub] = useState([])
	const [loader, setLoader] = useState(false)

	const handleUserName = ({ value }) => {
		setUserName(value.replace(/ /g, ''))
	}

	const handleFetchData = async e => {
		e.preventDefault()
		if (userName !== '') {
			setLoader(true)
			try {
				const reponse = await fetch(`https://api.github.com/users/${userName}`)
				const result = await reponse.json()
				setAllGithub(result)
				setLoader(false)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<main className='w-full h-screen'>
			<div>
				<SearchGitHub
					handleUserName={handleUserName}
					handleFetchData={handleFetchData}
				/>
				<div className='flex justify-center mt-20'>
					{loader && <Loader />}
					{allGithub.id && !loader ? (
						<CardGithub
							avatar={allGithub?.avatar_url}
							name={allGithub?.name}
							github={allGithub?.html_url}
							githubName={allGithub?.login}
							publicRepos={allGithub?.public_repos}
							followers={allGithub?.followers}
							following={allGithub?.following}
						/>
					) : (
						allGithub?.message && <div>{allGithub.message}</div>
					)}
				</div>
			</div>
		</main>
	)
}

export default Home

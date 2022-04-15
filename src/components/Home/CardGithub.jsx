import { Link } from 'react-router-dom'

const CardGithub = props => {
	const {
		avatar,
		name,
		github,
		githubName,
		publicRepos,
		followers,
		following,
	} = props
	return (
		<div className='px-4 py-5 text-center border rounded-md shadow-md w-96'>
			<a href={github}>
				<img
					className='flex items-center justify-center w-24 h-24 m-auto rounded-full'
					src={avatar}
					alt={name}
				/>
			</a>
			<h2>{name}</h2>
			<h3>{githubName}</h3>

			<div className='flex justify-between mt-3 text-center'>
				<p>
					<span className='block text-xl font-bold'>Repositories:</span>
					<span>{publicRepos}</span>
				</p>
				<p>
					<Link to={`/followers/${githubName}`}>
						<span className='block text-xl font-bold'>Followers:</span>
						<span>{followers}</span>
					</Link>
				</p>
				<p>
					<span className='block text-xl font-bold'>Following:</span>
					<span>{following}</span>
				</p>
			</div>
			<Link
				className='block p-3 mt-5 border-2 hover:bg-black hover:text-white'
				to={`/repositories/${githubName}`}
			>
				Repositories
			</Link>
		</div>
	)
}

export default CardGithub

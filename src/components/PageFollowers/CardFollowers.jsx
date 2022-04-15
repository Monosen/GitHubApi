import { Link } from 'react-router-dom'

const CardFollowers = ({ name, avatar, github }) => {
	return (
		<div className='container px-4 py-5 m-4 text-center border rounded-md shadow-md sm:w-5/12 lg:w-3/12 xl:w-96'>
			<a href={github}>
				<img
					className='flex items-center justify-center w-24 h-24 m-auto rounded-full'
					src={avatar}
					alt={name}
				/>
			</a>
			<h2>{name}</h2>

			<Link
				className='block p-3 mt-5 border-2 hover:bg-black hover:text-white'
				to={`/repositories/${name}`}
			>
				Repositories
			</Link>
		</div>
	)
}

export default CardFollowers

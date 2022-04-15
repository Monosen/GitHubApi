const CardRepos = ({ name, language, visibility, url, forks }) => {
	return (
		<div className='container p-2 mx-3 my-4 text-white bg-blue-500 border rounded-md shadow sm:w-5/12 xl:w-3/12'>
			<h4 className='my-4 text-xl font-bold text-center sm:text-2xl'>{name}</h4>
			<div className='justify-between text-center sm:flex'>
				<p className='mt-2.5'>
					<span className='block text-xl font-semibold '>Language:</span>
					<span>{language}</span>
				</p>
				<p className='mt-2.5'>
					<span className='block text-xl font-semibold '>Visibility:</span>
					<span>{visibility}</span>
				</p>
				<p className='mt-2.5'>
					<span className='block text-xl font-semibold '>Fork:</span>
					<span>{forks}</span>
				</p>
			</div>
			<a
				className='block p-3 mt-5 text-center bg-blue-300 border-2 border-blue-300 hover:bg-white hover:text-black'
				href={url}
				target='_blank'
				rel='noreferrer'
			>
				Repositories
			</a>
		</div>
	)
}

export default CardRepos

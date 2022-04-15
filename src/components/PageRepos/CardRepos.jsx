import React from 'react'

const CardRepos = ({ name, language, visibility, url, forks }) => {
	return (
		<div className='container mx-3 my-4 border shadow rounded-md p-2 sm:w-5/12 xl:w-3/12'>
			<h4 className='text-center my-4 text-xl sm:text-2xl font-bold'>{name}</h4>
			<div className='sm:flex justify-between text-center'>
				<p className='mt-2.5'>
					<span className=' text-xl font-semibold block'>Language:</span>
					<span>{language}</span>
				</p>
				<p className='mt-2.5'>
					<span className=' text-xl font-semibold block'>Visibility:</span>
					<span>{visibility}</span>
				</p>
				<p className='mt-2.5'>
					<span className=' text-xl font-semibold block'>Fork:</span>
					<span>{forks}</span>
				</p>
			</div>
			<a
				className='p-3 border-2 mt-5 block hover:bg-black hover:text-white text-center'
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

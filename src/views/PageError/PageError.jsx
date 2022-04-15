import { Link } from 'react-router-dom'

const PageError = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='font-bold text-9xl'>404</h1>
			<h3 className='mt-5 text-3xl font-semibold'>Not Fount</h3>
			<p className='mt-5 capitalize'>
				the resource requested could not be found on this server
			</p>
			<Link
				className='p-3 mt-4 capitalize border hover:bg-black hover:text-white'
				to={'/'}
			>
				go back home
			</Link>
		</div>
	)
}

export default PageError

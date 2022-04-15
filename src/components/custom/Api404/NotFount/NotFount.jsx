import { Link } from 'react-router-dom'

// img
import X from '../../../../img/X.png'

const NotFount = ({ message }) => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<img src={X} alt={message} />
			<h1 className='mt-3 text-3xl'>{message}</h1>
			<Link
				className='block p-3 mt-5 border-2 hover:bg-black hover:text-white'
				to={'/'}
			>
				Home
			</Link>
		</div>
	)
}

export default NotFount

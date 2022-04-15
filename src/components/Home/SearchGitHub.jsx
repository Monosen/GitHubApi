const SearchGitHub = ({ handleUserName, handleFetchData }) => {
	return (
		<form
			className='py-10 text-center bg-blue-500 rounded-md w-96'
			action=''
			onSubmit={e => handleFetchData(e)}
		>
			<input
				className='rounded-l-md py-2.5 px-3 w-8/12 max-w-xs border-transparent focus:outline-none shadow-md border-blue-300'
				type='text'
				placeholder='User Name'
				onChange={({ target }) => handleUserName(target)}
			/>
			<input
				className='rounded-r-md py-2.5 px-3 bg-blue-300 text-white hover:bg-white hover:text-blue-300 border hover:border-blue-300 focus:outline-none'
				type='submit'
				value='Search'
			/>
		</form>
	)
}

export default SearchGitHub

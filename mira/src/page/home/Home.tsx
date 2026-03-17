import React, { useState, ChangeEvent } from 'react';
import './Home.css'

function Home() {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

  return (

		<div className='page-layout'>
			<div className='jp-text-display'>
				
			</div>
    	<input
				type="text"
				id="userAnswer"
				className='romaji-input-text'
				value={inputValue}
				onChange={handleChange}
			/>
		</div>
  )
}

export default Home;
import React, { useState, ChangeEvent, useRef } from 'react';
import './Home.css'
import { hiragana, HiraganaCharacter } from "../../hiragana";
import CharacterTable from "../../component/CharacterTable/CharacterTable"

function Home() {
	const [hiraganaText, setHiraganaText] = useState<HiraganaCharacter>(
    hiragana[Math.floor(Math.random() * hiragana.length)]
  );

	const getRandomCharacter = () => {
		const randomIndex = Math.floor(Math.random() * hiragana.length)
		setHiraganaText(hiragana[randomIndex]);
	}
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [inputValue, setInputValue] = useState('');
	const [correctCount, setCorrectCount] = useState(0);
	const [message, setMessage] = useState('頑張って!');

	const checkAnswer = () => {
		if (inputValue.trim().toLowerCase() === hiraganaText.romaji) {
			setCorrectCount((prev) => prev + 1);
      setMessage("Correct!");
    } else {
      setMessage(
        `Incorrect. The answer was ${hiraganaText.romaji}`
      );
		}
		getRandomCharacter();
		setInputValue("");
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			buttonRef.current?.click();
		}
	}

  return (
		
		<div className='page-layout'>
			<div className='jp-text-display'>
				<p>{hiraganaText.char}</p>
			</div>
			<div className='input-container'>
				<input
				type="text"
				id="userAnswer"
				className='romaji-input-text'
				value={inputValue}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				autoComplete="off"
				/>
			</div>
			<div>
				<p>{correctCount}</p>
				<p>
					{message}
				</p>
			</div>
			<div className='button-container'>
				<button
				className='check-button'
				onClick={checkAnswer} 
				ref={buttonRef}> Check </button>
			</div>
			<CharacterTable />
		</div>
  )
}

export default Home;
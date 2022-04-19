import { useState } from 'react';

import memesData from '../memesData';

const Meme = () => {
	const [allMemeImages, setAllMemeImages] = useState(memesData);
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'https://i.imgflip.com/1bij.jpg',
	});

	const handleChange = event => {
		const { name, value } = event.target;
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value,
		}));
	}

	const getMemeImage = e => {
		e.preventDefault();
		const memesArray = allMemeImages.data.memes;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomIndex].url;


		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url,
		}));
	};
	
	return (
		<main>
			<div className='form'>
				<input
					value={meme.topText}
					onChange={handleChange}
					name='topText'
					type='text'
					placeholder='Top text'
					className='form--input'
				/>
				<input
					value={meme.bottomText}
					onChange={handleChange}
					name='bottomText'
					type='text'
					placeholder='Bottom text'
					className='form--input'
				/>
				<button className='form--button' onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
			<div className='meme'>
				<img src={meme.randomImage} className='meme--image' alt='meme' />
				<h2 className='meme--text top'>{meme.topText}</h2>
				<h2 className='meme--text bottom'>{meme.bottomText}</h2>
			</div>
		</main>
	);
};

export default Meme;

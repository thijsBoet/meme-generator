import { useState } from 'react';

import memesData from '../memesData';

const Meme = () => {
	const [allMemeImages, setAllMemeImages] = useState(memesData);
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImg: 'https://i.imgflip.com/1bij.jpg',
	});

	const getMemeImage = e => {
		e.preventDefault();
		const memesArray = allMemeImages.data.memes;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomIndex].url;

		console.log(meme)

		setMeme(prevMeme => ({
			...prevMeme,
			randomImg: url,
		}));
	};
	
	return (
		<main>
			<form className='form'>
				<input className='form--input' type='text' placeholder='top' />
				<input className='form--input' type='text' placeholder='bottom' />
				<button
					onClick={e => getMemeImage(e)}
					className='form--button'
					type='submit'
				>
					Get a new meme image
				</button>
			</form>
			<img
				className='meme--image'
				src={meme.randomImg}
				alt='meme'
			/>
		</main>
	);
};

export default Meme;

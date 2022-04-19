import { useState, useEffect } from 'react';

const Meme = () => {
	const [allMemeImages, setAllMemeImages] = useState([]);
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'https://i.imgflip.com/1bij.jpg',
	});

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then(response => response.json())
			.then(data => {
				setAllMemeImages(data.data.memes);
			});
	}, []);

	const handleChange = event => {
		const { name, value } = event.target;
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value,
		}));
	}


	console.log(allMemeImages);
	const getMemeImage = e => {
		e.preventDefault();

		const randomIndex = Math.floor(Math.random() * allMemeImages.length);
		const url = allMemeImages[randomIndex].url;


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

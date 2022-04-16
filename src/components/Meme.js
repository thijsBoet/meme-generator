const Meme = () => {
	return (
		<main>
			<form className="form">
				<input className="form--input" type="text" placeholder="top"/>
				<input className="form--input" type="text" placeholder="bottom"/>
				<button className="form--button" type="submit">Get a new meme image</button>
			</form>
		</main>
	);
}

export default Meme;
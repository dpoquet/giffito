import React, { useEffect, useState } from "react";
import { getGifData } from "../../services/gifs";
import { Redirect } from "wouter";
import './Detail.css';

export default function DetailPage({ params }) {
	const { id } = params;
	const [gifData, setGifData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);


  useEffect(() => {
		setIsLoading(true);

		getGifData(id)
			.then((gifData) => {
				setGifData(gifData);
				setIsLoading(false);
			}).catch(err => {
				setIsError(true);
			})
	}, [id]);

	function getImageUrl(images) {
		return images.downsized_medium.url || "";
	}

	if (isLoading) {
		return <p>Loading data...</p>
	}

	if (isError) return <Redirect to='/404' />;

	if (!gifData) return null;

	console.log(gifData);

	return (
		<section className="GifItem">
			<h1>{gifData.title}</h1>
			<img
				src={getImageUrl(gifData.images)}
				alt={gifData.alt}
				title={gifData.title}
			/>
			<input className="GifItem-input" type="text" readonly value={getImageUrl(gifData.images)} />
			<a className="GifItem-link" href={gifData.url} target="_blank" rel="noopener noreferrer">
				Link to Giphy
			</a>
		</section>
	);
}

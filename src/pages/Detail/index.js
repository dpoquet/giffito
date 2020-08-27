import React, { useEffect, useState } from "react";
import { getGifData } from "../../services/gifs";
import { Redirect } from "wouter";

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

	return (
		<section className="GifList-item">
			<h1>{gifData.title}</h1>
			<img
				src={getImageUrl(gifData.images)}
				alt={gifData.alt}
				title={gifData.title}
			/>
			<a href={gifData.url} target="_blank">
				Link to Giphy
			</a>
		</section>
	);
}

import React from "react";
import Gif from "../../components/Gif/Gif";
import "./GifGrid.css";
import Loading from "../../components/Loading";

export default function GifGrid({ gifs, isLoading }) {
	if (isLoading) return <Loading />;

	return (
		<section className="GifGrid">
			{gifs.map((gif) => (
				<Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
			))}
		</section>
	);
}

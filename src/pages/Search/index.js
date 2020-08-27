import React, { useEffect, useState } from "react";
import GifGrid from "../../components/GifGrid/GifGrid";
import { searchGifs } from "../../services/gifs";

export default function SearchPage({ params }) {
	const { keyword } = params;
	const [gifList, setGifList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
    setLoading(true);
    searchGifs({ keyword, limit: 10 }).then((gifs) => {
      setGifList(gifs);
      setLoading(false);
    });
	}, [keyword]);

	const title = gifList ? `${gifList.length} resultados de ${keyword}` : "";

	if (loading) return <p>Loading list...</p>;

	return (
		<>
			<h1>{title}</h1>
			<GifGrid gifs={gifList} />
		</>
	)
}

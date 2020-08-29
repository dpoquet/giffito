import React, { useEffect, useState } from "react";
import GifGrid from "../../components/GifGrid/GifGrid";
import { searchGifs } from "../../services/gifs";
import SearchForm from "../../components/SearchForm";

export default function SearchPage({ params }) {
	const { keyword } = params;
	const [gifList, setGifList] = useState([]);
	const [totalGif, setTotalGif] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
    setLoading(true);
    searchGifs({ keyword }).then((gifs) => {
			setGifList(gifs.list);
			setTotalGif(gifs.total);
      setLoading(false);
    });
	}, [keyword]);

	const title = gifList && !loading ? `${totalGif} results for "${decodeURI(keyword)}" search` : "";

	return (
		<>
			<SearchForm initialKeyword={keyword} />
			<h1>{title}</h1>
			<GifGrid gifs={gifList} isLoading={loading} />
		</>
	)
}

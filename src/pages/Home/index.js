import React, { useEffect, useState } from "react";
import SearchForm from "components/SearchForm";
import GifGrid from "components/GifGrid/GifGrid";
import { useSearchGifs } from "hooks/useSearchGifs";
import TrendingSearches from "components/TrendingSearches";
import { getTrendingSearches } from "services/trendings";

function Home() {
  const { loading, gifList } = useSearchGifs();
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearches().then(setTrends);
  }, []); 

  return (
    <>
      <SearchForm />
      <section>
        <TrendingSearches trends={trends} />
        <h2>Last search</h2>
        <GifGrid gifs={gifList} isLoading={loading} />
      </section>
    </>
  )
}

export default Home;

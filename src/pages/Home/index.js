import React, { useEffect, useState, useCallback } from "react";
import SearchForm from "components/SearchForm";
import GifGrid from "components/GifGrid/GifGrid";
import { useSearchGifs } from "hooks/useSearchGifs";
import TrendingSearches from "components/TrendingSearches";
import { getTrendingSearches } from "services/trendings";
import { useLocation } from "wouter";
import { Helmet } from 'react-helmet';

function Home() {
  const { loading, gifList } = useSearchGifs();
  const [trends, setTrends] = useState([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    getTrendingSearches().then(setTrends);

    return () => console.log('Home unmounted!');
  }, []);
  
  const onSubmitSearchForm = useCallback((value) => {
    setLocation(`/search/${value}`);
  }, [setLocation]);

  return (
    <>
      <Helmet>
        <title>Search GIF's from Giphy | Giffito</title>
      </Helmet>
      <SearchForm onSubmit={onSubmitSearchForm} />
      <section>
        <TrendingSearches trends={trends} />
        <h2>Last search</h2>
        <GifGrid gifs={gifList} isLoading={loading} />
      </section>
    </>
  )
}

export default Home;

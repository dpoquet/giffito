import React from "react";
import GifGrid from "components/GifGrid/GifGrid";
import SearchForm from "components/SearchForm";
import { useSearchGifs } from "hooks/useSearchGifs";

export default function SearchPage({ params }) {
  const { keyword } = params;
  const { loading, loadingNextPage, gifList, totalGif, setPage } = useSearchGifs({ keyword });

  const title = gifList && !loading ? `${totalGif} results for "${decodeURI(keyword)}" search` : "";

  const handleNextPage = () => {  
    setPage(currentPage => currentPage + 1);
  }

  return (
    <>
      <SearchForm initialKeyword={keyword} />
      <h1>{title}</h1>
      <GifGrid gifs={gifList} isLoading={loading} />
      
      { !loadingNextPage ?
          <button style={ {display: 'block', width:'200px', margin:'auto'} } onClick={handleNextPage}>Show me more Gifs</button>
        : <p>Loading more Gifs...</p>
      }
    </>
  );
}

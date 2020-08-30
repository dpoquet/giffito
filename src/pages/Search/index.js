import React from "react";
import GifGrid from "components/GifGrid/GifGrid";
import SearchForm from "components/SearchForm";
import { useSearchGifs } from "hooks/useSearchGifs";
import Loading from "components/Loading";
import './SearchPage.css';

export default function SearchPage({ params }) {
  const { keyword } = params;
  const { loading, loadingNextPage, gifList, totalGif, setPage } = useSearchGifs({ keyword });

  const title = gifList && !loading ? `${totalGif} results for "${decodeURI(keyword)}" search` : "";

  const handleNextPage = () => {  
    setPage(currentPage => currentPage + 1);
  }

  return (
    <div className="o-searchPage">
      <SearchForm initialKeyword={keyword} />
      <h1>{title}</h1>
      <GifGrid gifs={gifList} isLoading={loading} />

      { totalGif > gifList.length &&
        <div className="o-searchPage__bottom">
          { !loadingNextPage ? <button class="a-button" onClick={handleNextPage}>Show me more Gifs</button>
            : <Loading />
          }
        </div>
      }
    </div>
  );
}

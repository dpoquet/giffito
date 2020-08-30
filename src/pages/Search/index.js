import React from "react";
import GifGrid from "components/GifGrid/GifGrid";
import SearchForm from "components/SearchForm";
import { useSearchGifs } from "hooks/useSearchGifs";
import Loading from "components/Loading";
import './SearchPage.css';
import { useLocation } from "wouter";
import { Helmet } from 'react-helmet';

export default function SearchPage({ params }) {
  const { keyword } = params;
  const [, setLocation] = useLocation();
  const { loading, loadingNextPage, gifList, totalGif, setPage } = useSearchGifs({ keyword });

  const title = gifList && !loading ? `${totalGif} results for "${decodeURI(keyword)}" search` : "Loading results...";

  const handleNextPage = () => {  
    setPage(currentPage => currentPage + 1);
  }

  const onSubmitSearchForm = (value) => {
    setLocation(`/search/${value}`);
  }

  return (
    <>
      <Helmet>
        <title>{title} | Giffito</title>
      </Helmet>
      <div className="o-searchPage">
        <SearchForm initialKeyword={keyword} onSubmit={onSubmitSearchForm} />
        <h1>{title}</h1>
        <GifGrid gifs={gifList} isLoading={loading} />

        { totalGif > gifList.length &&
          <div className="o-searchPage__bottom">
            { !loadingNextPage ? <button className="a-button" onClick={handleNextPage}>Show me more Gifs</button>
              : <Loading />
            }
          </div>
        }
      </div>
    </>
  );
}

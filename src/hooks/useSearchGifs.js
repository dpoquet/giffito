import {useEffect, useState} from 'react';
import { searchGifs } from 'services/gifs';

const INITIAL_PAGE = 0;

export function useSearchGifs({ keyword } = { keyword: null }) {
  const [gifList, setGifList] = useState([]);
  const [totalGif, setTotalGif] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);

    searchGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifList(gifs.list);
      setTotalGif(gifs.total);
      setLoading(false);
      localStorage.setItem('lastKeyword', keywordToUse);
    });
  }, [keyword, keywordToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    searchGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifList(prevGifs => prevGifs.concat(nextGifs.list));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page]);

  return { loading, loadingNextPage, gifList, totalGif, setPage }
}
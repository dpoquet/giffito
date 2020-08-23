import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import { searchGifs } from '../services/gifs';

export default function GifList ({ params }) {
    const { keyword } = params;
    const [gifList, setGifList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      async function fetchData() {
        try {
            setLoading(true);
            const gifs = await searchGifs({ keyword, limit: 10 });
            setGifList(gifs);
            setLoading(false);
        } catch (error) {
            console.error (error);
            setLoading(false);
        }
      }
      fetchData();
    }, [keyword]);

    if (loading) return <p>Loading list...</p>

    return (
        <section className="GifList">
            { 
                gifList.map(gif =>
                    <Gif 
                        key={gif.id}
                        title={gif.title} 
                        url={gif.url} 
                        id={gif.id}
                    />
                ) 
            }
        </section>
    )
}
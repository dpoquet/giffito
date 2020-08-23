import React, { useEffect, useState } from 'react';
import { getGifData } from '../services/gifs';

export default function GifDetail({ params }) {
    const { id } = params;
    const [gifData, setGifData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true);
            const response = await getGifData(id);
            setGifData(response);
            setLoading(false);
          } catch (error) {
            console.error (error);
            setLoading(false);
          }
        }
        fetchData();
    }, [id]);

    function getImageUrl(images) {
        return images.downsized_medium.url || '';
    }

    if (loading) return <p>Loading data...</p>

    return (
        <section className="GifList-item">
            {gifData &&
                <>
                    <h1>{gifData.title}</h1>
                    <img src={getImageUrl(gifData.images)} alt={gifData.alt} title={gifData.title} />
                    <a href={gifData.url} target="_blank">Link to Giphy</a>
                </>
            }
        </section>
    )
}
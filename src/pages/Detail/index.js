import React, { useEffect, useState } from "react";
import { getGifData } from "services/gifs";
import { Redirect } from "wouter";
import "./Detail.css";
import { Helmet } from 'react-helmet';
import Loading from "components/Loading";

export default function DetailPage({ params }) {
  const { id } = params;
  const [gifData, setGifData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getGifData(id)
      .then((gifData) => {
        setGifData(gifData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [id]);

  function getImageUrl(images) {
    return images.downsized_medium.url || "";
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) return <Redirect to="/404" />;

  if (!gifData) return null;

  return (
    <>
      <Helmet>
        <title>{gifData.title} | Giffito</title>
      </Helmet>
      <section className="GifItem">
        <h1>{gifData.title}</h1>
        <img
          src={getImageUrl(gifData.images)}
          alt={gifData.alt}
          title={gifData.title}
        />
        <input
          className="GifItem-input"
          type="text"
          readOnly 
          value={getImageUrl(gifData.images)}
        />
        <a
          className="GifItem-link"
          href={gifData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Giphy
        </a>
      </section>
    </>
  );
}

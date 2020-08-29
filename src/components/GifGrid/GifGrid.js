import React from "react";
import Gif from "components/Gif/Gif";
import "./GifGrid.css";
import Loading from "components/Loading";

export default function GifGrid({ gifs, isLoading }) {

  return (
    <section className="GifGrid">
      {
        isLoading ? <Loading />
        :
        <div className="GifGrid-list">
          {gifs.map((gif) => (
            <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
          ))}
        </div>
      }
    </section>
  );
}

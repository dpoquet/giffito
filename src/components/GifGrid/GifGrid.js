import React from "react";
import Gif from "../../components/Gif/Gif";
import './GifGrid.css';

export default function GifGrid({ gifs }) {
	return (
		<section className="GifGrid">
      {
        gifs.map((gif) => 
          <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
        )
      }
		</section>
	);
}

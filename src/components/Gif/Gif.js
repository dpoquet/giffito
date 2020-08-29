import React from "react";
import { Link } from "wouter";
import "./Gif.css";

export default function Gif({ id, title, url }) {
	return (
		<div className="Gif">
			<Link className="Gif-link" to={`/${id}`}>
				<h4 className="Gif-title">{title}</h4>
				<img src={url} alt={title} title={title} />
			</Link>
		</div>
	);
}

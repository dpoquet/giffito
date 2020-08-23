import React from 'react'
import { Link } from 'wouter'

export default function Gif ({id, title, url}) {
    return (
        <Link className="GifList-item" to={`/${id}`}>
            <h4>{title}</h4>
            <img src={url} alt={title} title={title} />
        </Link>
    )
}
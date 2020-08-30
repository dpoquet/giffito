import React from 'react';
import { Link } from 'wouter';
import './TrendingSearches.css';

export default function TrendingSearches({ trends }) {

  if (!trends) return null;

  console.log(trends);

  return (
    <section className="m-trending">
      <h2 className="m-trending__title">Trending searches</h2>

      <ul className="m-trending__list">
        {trends.map((trend) => (
          <li key={trend}>
            <Link to={`/search/${trend}`} title={trend}>{trend}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
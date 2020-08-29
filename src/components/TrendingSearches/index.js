import React from 'react';
import { Link } from 'wouter';

export default function TrendingSearches({ trends }) {

  if (!trends) return null;

  console.log(trends);

  return (
    <section>
      <h3>Trending searches</h3>

      <ul>
        {trends.map((trend) => (
          <li key={trend}>
            <Link to={`/search/${trend}`}>{trend}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
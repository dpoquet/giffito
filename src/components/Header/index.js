import React from 'react';
import './Header.css';
import { Link } from 'wouter';

export default function Header() {
  return (
		<header className="o-header">
      <Link to="/">
        <figure className="o-header__logo">
          <img src="/images/giffito-logo.png" alt="Giffito" title="Giffito" />
        </figure>
      </Link>
    </header>
  )
}


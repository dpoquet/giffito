import React, { useState } from "react";
import { useLocation } from "wouter";
import "../../App.css"; 

function Home() {
  const [query, setQuery] = useState('');
  const [, setLocation] = useLocation();

  function onSubmit(event) {
    event.preventDefault();
    setLocation(`/search/${query}`);
  }

  function onInputChange(event) {
    setQuery(event.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={query} />
      </form>

      <h2>Gifs más buscados</h2>
    </>
	);
}

export default Home;

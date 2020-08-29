import React, { useState } from "react";
import { useLocation } from "wouter";
import "./SearchForm.css";

export default function SearchForm({ initialKeyword = "" }) {
  const [query, setQuery] = useState(initialKeyword);
  const [, setLocation] = useLocation();

  function onSubmit(event) {
    event.preventDefault();
    setLocation(`/search/${query}`);
  }

  function onInputChange(event) {
    setQuery(event.target.value);
  }

  return (
    <form className="m-search-form" onSubmit={onSubmit}>
      <input
        className="m-search-form__input"
        type="text"
        onChange={onInputChange}
        value={decodeURI(query)}
        placeholder="Search a gif :)"
      />
    </form>
  );
}

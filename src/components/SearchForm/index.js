import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ initialKeyword = "", onSubmit }) {
  const [keyword, setKeyword] = useState(initialKeyword);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (keyword !== '') onSubmit(keyword);
  }

  const onInputChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <form className="m-search-form" onSubmit={handleOnSubmit}>
      <input
        className="m-search-form__input"
        type="text"
        onChange={onInputChange}
        value={decodeURI(keyword)}
        placeholder="Search a gif :)"
      />
      <button type="submit" className="m-search-form__button">Search</button>
    </form>
  );
}

export default React.memo(SearchForm);

import React, { useState, FormEvent } from "react";
import { Giphy } from "../models/giphyResponse";

interface Props {
  onSubmit: (gif: string) => void;
}

export function SearchForm({ onSubmit }: Props) {
  const [search, setSearch] = useState("");

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(search);
  }

  return (
    <div className="SearchForm" onSubmit={onFormSubmit}>
      <form className="inputForm">
        <p>Search for a gif</p>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

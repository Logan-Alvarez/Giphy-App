import React, { useEffect, useState } from "react";
import { Giphy } from "../models/giphyResponse";
import { fetchSearch, fetchTrendingApi } from "../services/GiphyApiService";
import ResultsList from "./ResultsList";
import { SearchForm } from "./SearchForm";

export default function Main() {
  const [gifs, setGifs] = useState<Giphy[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search === "") {
      fetchTrendingApi().then((data) => setGifs(data));
    } else {
      fetchSearch(search).then((data) => setGifs(data));
    }
  }, [search]);

  function handleGiphySearchForm(gif: string) {
    setSearch(gif);
  }

  return (
    <div>
      <SearchForm onSubmit={handleGiphySearchForm} />
      <h2 className="results">Results</h2>
      <ResultsList gifs={gifs} />
    </div>
  );
}

import React from "react";
import axios from "axios";
import { Giphy } from "../models/giphyResponse";

export function fetchTrendingApi(): Promise<Giphy[]> {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: { api_key: apiKey },
    })
    .then((res) => res.data.data); //alwasy starts with res.data
}

export function fetchSearch(searchTerm: string): Promise<Giphy[]> {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: apiKey,
      },
    })
    .then((res) => res.data.data);
}

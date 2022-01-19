import React from "react";
import axios from "axios";
import { Data } from "../models/giphy";

export function fetchGiphyApi(): Promise<Data[]> {
  return axios
    .get("api.giphy.com/v1/gifs/search", {
      params: { q: "", api_key: "JWp6Rq4qJHePDesfRr1xaQwEDsEjhbSA" },
    })
    .then((res) => res.data);
}

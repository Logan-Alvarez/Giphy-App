import React, { useEffect, useState } from "react";
import { Giphy } from "../models/giphyResponse";
import { Result } from "./Result";

export interface Props {
  gifs: Giphy[];
}

export default function ResultsList({ gifs }: Props) {
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      {gifs.map((gif, i) => (
        <Result key={i} gif={gif} />
      ))}
    </div>
  );
}

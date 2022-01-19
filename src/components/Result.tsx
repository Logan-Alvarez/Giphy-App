import React, { useEffect, useState } from "react";
import { Giphy } from "../models/giphyResponse";

export interface Prop {
  gif: Giphy;
}

export function Result({ gif }: Prop) {
  return (
    <div className="Results">
      <div key={gif.id} className="Results-content">
        <h3>{gif.title}</h3>
        <img src={gif.images.original.url} alt="" />
        <a href={gif.url}>Link to giphy</a>
      </div>
    </div>
  );
}

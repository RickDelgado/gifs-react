import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    setGifs(gifsCache[term]);
  };

  const handleSeacrch = async (term: string) => {
    const normalized = term.trim();
    if (!normalized) return;

    setPreviousTerms((prev) => {
      // si ya existe, lo movemos al inicio
      if (prev.includes(normalized)) {
        return [normalized, ...prev.filter((t) => t !== normalized)];
      }
      // si no existe, lo agregamos al inicio y limitamos a 10
      return [normalized, ...prev].slice(0, 10);
    });

    // await getGifsByQuery(normalized);

    if (gifsCache[normalized]) {
      setGifs(gifsCache[normalized]);
      return;
    }

    const gifs = await getGifsByQuery(normalized);
    setGifs(gifs);

    gifsCache[normalized] = gifs;
  };

  return {
    //Properties
    gifs,
    previousTerms,

    //Actions
    handleTermClicked,
    handleSeacrch,
  };
};

export default useGifs;

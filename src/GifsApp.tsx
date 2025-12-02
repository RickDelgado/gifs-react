import { useState, useEffect } from "react";
import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { mockGifs, type Gif } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader";
import Search from "./shared/components/Search";
import { fetchRandomGifUrl } from "./gifs/services/GifApi";

const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  useEffect(() => {
    fetchRandomGifUrl("").then((urls) => setGifs(urls));
  }, []);

  const [previousTerms, setPreviousTerms] = useState<string[]>([
    "cats",
    "dogs",
    "memes",
  ]);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  };

  const handleSeacrch = (term: string) => {
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

    fetchRandomGifUrl(normalized).then((urls) => setGifs(urls));
  };

  return (
    <>
      <CustomHeader
        titulo="Buscador de Gifs"
        descripcion="Descubre y comparte el gift perfecto"
      />

      <Search placeholder="Buscar gifs..." onQuery={handleSeacrch} />

      <PreviousSearches
        previousSearches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};

export default GifsApp;

import { useState } from "react";
import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader";
import Search from "./shared/components/Search";

const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([
    "cats",
    "dogs",
    "memes",
  ]);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  };

  const handleSeacrch = (term: string) => {
    console.log(`Search for: ${term}`);
  };

  return (
    <>
      <CustomHeader
        titulo="Buscador de Gifs"
        descripcion="Descubre y comparte el gift perfecto"
      />

      <Search placeholder="Buscar gifs..." />

      <PreviousSearches
        previousSearches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};

export default GifsApp;

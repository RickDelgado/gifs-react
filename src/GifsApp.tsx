import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import Search from "./shared/components/Search";

import useGifs from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClicked, handleSeacrch } = useGifs();

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

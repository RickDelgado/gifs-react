import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader";
import Search from "./shared/components/Search";

const GifsApp = () => {
  return (
    <>
      <CustomHeader
        titulo="Buscador de Gifs"
        descripcion="Descubre y comparte el gift perfecto"
      />

      <Search placeholder="Buscar gifs..." />

      <PreviousSearches
        previousSearches={["Gatos", "Perros", "Memes", "Ratones", "Películas"]}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};

export default GifsApp;

import type { Gif } from "../../mock-data/gifs.mock";
import type { GiphyResponse } from "../data/giphy.response";

const API_KEY: string = "yjjyjsLNdGzbzrb3MUwXLDa7e3baxeYE";

export const fetchRandomGifUrl = async (term: string): Promise<Gif[]> => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${term}&limit=25&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
  );

  if (!res.ok) {
    throw new Error(`Giphy API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const { data } = json as GiphyResponse;

  const gifs: Gif[] = data
    .filter((gif) => gif.images?.original?.url)
    .map(
      (gif) =>
        ({
          id: gif.id,
          url: gif.images.original.url,
          title: gif.title,
        } as Gif)
    );

  if (gifs.length === 0) {
    return [];
  }

  return gifs;
};

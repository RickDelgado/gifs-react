import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY: string = "yjjyjsLNdGzbzrb3MUwXLDa7e3baxeYE";

/**
 * Devuelve la URL del GIF aleatorio desde la API de Giphy.
 * No modifica el DOM; simplemente retorna la URL para que el llamador la use.
 */
export const fetchRandomGifUrl = async (): Promise<string> => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error(`Giphy API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const { data } = json as GiphyRandomResponse;
  const imageUrl = data?.images?.original?.url;

  if (!imageUrl) {
    throw new Error("No image URL returned from Giphy API");
  }

  return imageUrl;
};

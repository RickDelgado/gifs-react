import { giphyApi } from "../api/giphy.api";
import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  console.log("API Key:", import.meta.env.VITE_GIPHY_API_KEY);
  const response = await giphyApi.get<GiphyResponse>(`/search`, {
    params: {
      q: query,
      limit: 25,
    },
  });

  // if (!response.ok) {
  //   throw new Error(
  //     `Giphy API error: ${response.status} ${response.statusText}`
  //   );
  // }

  const { data } = response.data as GiphyResponse;

  const gifs: Gif[] = data
    .filter((gif) => gif.images?.original?.url)
    .map(
      (gif) =>
        ({
          id: gif.id,
          url: gif.images.original.url,
          title: gif.title,
          width: parseInt(gif.images.original.width, 10),
          height: parseInt(gif.images.original.height, 10),
        } as Gif)
    );

  if (gifs.length === 0) {
    return [];
  }

  return gifs;
};

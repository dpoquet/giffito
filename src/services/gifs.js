import { API_URL, API_KEY } from './constants';
import { handleError } from './errorHandler';

export async function searchGifs({ keyword = "homer", limit = 25, page = 0 } = {}) {
  const endpointURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

  try {
    const response = await fetch(endpointURL);

    if (!response.ok) {
      handleError(response.status);
    }

    const { data, pagination } = await response.json();

    const gifsImages = data.map((item) => {
      const { id, title } = item;
      const url = item.images.downsized_medium.url;

      return {
        id,
        title,
        url,
      };
    });

    return {
      total: pagination.total_count,
      list: gifsImages
    };
  } catch (err) {
    throw new Error(err);
  }
}

export async function getGifData(id = null) {
  const endpointURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  try {
    const response = await fetch(endpointURL);

    if (!response.ok) {
      handleError(response.status);
    }

    const { data } = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

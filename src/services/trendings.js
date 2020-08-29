import { API_URL, API_KEY } from './constants';
import { handleError } from './errorHandler';

export async function getTrendingSearches() {
  const endpointURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

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
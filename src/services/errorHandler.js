export function handleError(status) {
  if (status === 404) {
    throw new Error('Gif not found');
  }

  if (status === 500) {
    throw new Error('There was a server error');
  }

  throw new Error('Unknown error');
}
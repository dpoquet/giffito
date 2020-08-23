const apiKey = 'Ve0fZYkJ27CSHXwFY9yhRhjcU9ASrbEW';

export function searchGifs({keyword = 'homer', limit = 25 } = {}) {
    const endpointURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;
    return fetch(endpointURL).then(res => res.json()).then(response => {
        const {data} = response;
        const gifsImages = data.map(item => {
            const { id, title } = item;
            const url = item.images.downsized_medium.url;

            return {
                id,
                title,
                url
            };
        });
        return gifsImages;
    });
}

export function getGifData(id = null) {
    const endpointURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;
    return fetch(endpointURL).then(res => res.json()).then(response => {
        return response.data;
    });
}
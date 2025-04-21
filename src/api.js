import axios from 'axios';

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const searchImages = async (query, page) => {
    const {data: response} = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${accessKey}`
        },
        params: {
            // page: page,
            query: query
        }
    });
    return response.results;
};

const getImages = async (page) => {
    const {data: response} = await axios.get('https://api.unsplash.com/photos', {
        headers: {
            Authorization: `Client-ID ${accessKey}`
        },
        params: {
            // page: page,
        }
    });
    return response.results;
};

export { searchImages, getImages };
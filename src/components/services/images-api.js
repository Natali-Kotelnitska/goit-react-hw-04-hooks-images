import axios from 'axios';

const KEY = '25749157-a4c917c2bcd06827218e6e0f4';
const baseURL = 'https://pixabay.com/api/';
// axios.defaults.baseURL = '';

export default async function fetchImages(searchQuery, page = 1) {
  return await axios.get(
    `${baseURL}?key=${KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
}

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20808921-1f06a7735b40cece4e6350a25';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchPixabayImgs = async ({ q, page }) => {
  return await axios.get('', { params: { q, page } });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchPixabayImgs };
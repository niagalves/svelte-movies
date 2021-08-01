const API_KEY = 'e3dd27f18bee707daf327ed448785fe5';

const API_URL = (param, type) => {
  if (type === 'all') {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}${param}`;
  }
  return `https://api.themoviedb.org/3/movie/${param}?api_key=${API_KEY}`;
};

export default API_URL;

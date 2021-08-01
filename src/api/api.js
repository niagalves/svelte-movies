const API_KEY = 'e3dd27f18bee707daf327ed448785fe5';

const API_URL = (page = 1) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
};

export default API_URL;

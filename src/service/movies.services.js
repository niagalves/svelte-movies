const API_KEY = 'e3dd27f18bee707daf327ed448785fe5';

export const getMovies = async (page) => {
  return await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`).then(x => x.json());
};

export const getMovie = async (id) => {
  return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(x => x.json());
};

export const findMovie = async (query) => {
  return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query.toLocaleLowerCase()}`).then(x => x.json());
};

const baseUrl = 'http://127.0.0.1:8899/';
// const baseUrl = 'http://10.200.10.23:8899/';
export const environment = {
  production: false,
  login: baseUrl + 'user/login',
  registration: baseUrl + 'user/register',
  movie: baseUrl + 'movie',
  movieRating: baseUrl + 'movie/rating', // put api
  user: baseUrl + 'user',
  movieByMovieType: baseUrl + 'movie/filter/',
};

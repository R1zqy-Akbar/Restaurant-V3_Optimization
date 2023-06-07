import { itActsAsFavoriteMovieModel } from './contract/favoriteMovieContract';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteMovieIdb.getAllMovies()).forEach(async (restaurant) => {
      await FavoriteMovieIdb.deleteMovie(restaurant.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});

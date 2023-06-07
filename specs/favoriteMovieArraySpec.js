import { itActsAsFavoriteMovieModel } from './contract/favoriteMovieContract';

let favoriteMovies = [];

const FavoriteMovieArray = {

  getMovie(id) {
    if (!id) {
      return;
    }

    return favoriteMovies.find((restaurant) => restaurant.id === id);
  },

  getAllMovies() {
    return favoriteMovies;
  },

  putMovie(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getMovie(restaurant.id)) {
      return;
    }

    favoriteMovies.push(restaurant);
  },

  deleteMovie(id) {
    // cara boros menghapus film dengan meng-copy restoran yang ada
    // kecuali restoran dengan id == id
    favoriteMovies = favoriteMovies.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => favoriteMovies = []);

  itActsAsFavoriteMovieModel(FavoriteMovieArray);
});

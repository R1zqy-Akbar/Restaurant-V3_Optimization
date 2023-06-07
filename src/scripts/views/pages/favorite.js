import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" id="title">Your Liked Restaurant</h2>
        <div class='resto-item__not__found'></div>
        <div id="movies" class="movies">        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((restaurant) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurant);
    });
    // tampilan saat tidak ada restoran yang disukai
    if (movies.length === 0) {
      document.querySelector('.resto-item__not__found').innerHTML = 'No Favorite Restaurant';
    }
  },
};

export default Favorite;

import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Find Your Best Restaurant</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.listRestaurant();
    const moviesContainer = document.querySelector('#movies');

    movies.forEach((restaurant) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurant);
    });
  },
};

export default NowPlaying;

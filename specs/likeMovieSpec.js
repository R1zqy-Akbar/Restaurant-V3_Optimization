import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import * as TestFactories from './helpers/testFactories';

// skenario menyukai sebuah restaurant
describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  // test 1: harus menunjukkan tombol suka ketika restoran belum disukai sebelumnya
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy();
  });

  // test 2: tidak boleh menampilkan tombol tidak suka ketika film tersebut belum disukai sebelumnya
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  // test 3: harus bisa menyukai restoran
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const movie = await FavoriteMovieIdb.getMovie(1);

    expect(movie).toEqual({ id: 1 });

    FavoriteMovieIdb.deleteMovie(1);
  });

  // test 4: sebaiknya tidak menambah restoran lagi kalau sudah disukai
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // Tambahkan restoran dengan ID 1 ke daftar restoran yang disukai
    await FavoriteMovieIdb.putMovie({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restoran
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada restoran yang ganda
    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([{ id: 1 }]);

    FavoriteMovieIdb.deleteMovie(1);
  });

  // test 5: tidak boleh menambahkan restoran jika tidak memiliki id
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([]);
  });
});

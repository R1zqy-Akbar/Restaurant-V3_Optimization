const itActsAsFavoriteMovieModel = (favoriteMovie) => {
  // test 1
  it('should return the restaurant that has been added', async () => {
    favoriteMovie.putMovie({ id: 1 });
    favoriteMovie.putMovie({ id: 2 });

    expect(await favoriteMovie.getMovie(1))
      .toEqual({ id: 1 });
    expect(await favoriteMovie.getMovie(2))
      .toEqual({ id: 2 });
    expect(await favoriteMovie.getMovie(3))
      .toEqual(undefined);
  });

  // test 2
  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteMovie.putMovie({ aProperty: 'property' });

    expect(await favoriteMovie.getAllMovies())
      .toEqual([]);
  });

  // test 3
  it('can return all of the restaurants that have been added', async () => {
    favoriteMovie.putMovie({ id: 1 });
    favoriteMovie.putMovie({ id: 2 });

    expect(await favoriteMovie.getAllMovies())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  // test 4
  it('should remove favorite restaurant', async () => {
    favoriteMovie.putMovie({ id: 1 });
    favoriteMovie.putMovie({ id: 2 });
    favoriteMovie.putMovie({ id: 3 });

    await favoriteMovie.deleteMovie(1);

    expect(await favoriteMovie.getAllMovies())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  // test 5
  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteMovie.putMovie({ id: 1 });
    favoriteMovie.putMovie({ id: 2 });
    favoriteMovie.putMovie({ id: 3 });

    await favoriteMovie.deleteMovie(4);

    expect(await favoriteMovie.getAllMovies())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteMovieModel };

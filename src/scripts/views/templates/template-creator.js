import CONFIG from '../../globals/config';

// mengambil menu
const allMenu = (menus) => {
  let menuList = '';

  menus.forEach((menu) => {
    menuList += `<span class="styled-span-drink">${menu.name}</span>`;
  });
  return menuList;
};

// mengambil review customers
const allReview = (reviews) => {
  let reviewList = '';

  reviews.forEach((review) => {
    reviewList += `
    <div class="review">
    <h3 style="font-weight: normal;">${review.name}</h3>
    <small>${review.date}</small>
    <p>${review.review}</p>
    <br>
    </div>
      `;
  });
  return reviewList;
};

// laman detail restaurant
const createMovieDetailTemplate = (restaurant) => `
<div class="details">
<h2 class="movie__title">${restaurant.name}</h2>
<img class="movie__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />

<br>
<div class="movie__info">
  <h3>Information</h3>        
  <h4>Address</h4>
  <p>${restaurant.address}</p>
  <h4>City</h4>
  <p>${restaurant.city}</p>
  <h4>Rating</h4>
  <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
</div>

<br>
<div class="movie__overview">
  <h3>Desciption</h3>
  <p>${restaurant.description}</p>
</div>

<br>
<div class="detail-restaurant">
  <h4 class="heading-menu">Foods</h4>
  <div class="menu-item">
    ${allMenu(restaurant.menus.foods)}
  </div>
  <h4 class="heading-menu">Drinks</h4>
  <div class="menu-item">
    ${allMenu(restaurant.menus.drinks)}
  </div>
</div>

<br>
<div class="reviews">
  <div class="customer-reviews">
    <h2>Customer Review</h2>
    <hr><br>
    ${allReview(restaurant.customerReviews)}
  </div>
</div>
</div>
`;

// laman list restaurant
const createMovieItemTemplate = (restaurants) => `
<div class="movie-item">
<div class="movie-item__header">
  <img class="movie-item__header__poster" alt="${restaurants.name}"
  src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}" crossorigin="anonymous">
  <div class="movie-item__header__rating">
    <p>⭐️<span class="movie-item__header__rating__score">${restaurants.rating}</span></p>
  </div>
</div>
<div class="movie-item__content" id="restaurant-item">
  <h3 id="restaurant-heading"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
  <p>${restaurants.description}</p>
</div>
</div>
`;

// createLikeButtonMovieTemplate
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

// createUnlikeButtonMovieTemplate
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
